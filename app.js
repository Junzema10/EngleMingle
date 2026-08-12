// ==========================================
// 1. STATE MANAGEMENT
// ==========================================
const state = {
  members: [], // Array of English names
  selectedCategory: 'general',
  currentQuestion: null,
  
  // Track remaining questions per category to prevent repetition
  unusedQuestions: {}, 
  
  // Speaker Rotation
  speakerOrder: [],
  currentSpeakerIndex: -1,
  
  // Timer State
  timerInterval: null,
  timerDuration: 120, // default 2 minutes (120 seconds)
  timerTimeLeft: 120,
  timerIsRunning: false,
  
  // Local Archive Data
  archives: []
};

// Initialize unused questions pool
function initUnusedQuestions() {
  for (const cat in topicsData) {
    state.unusedQuestions[cat] = [...Array(topicsData[cat].length).keys()];
  }
}

// ==========================================
// 2. DOM ELEMENTS
// ==========================================
const DOM = {
  // Screens
  stepSetup: document.getElementById('step-setup'),
  stepCategories: document.getElementById('step-categories'),
  stepDiscussion: document.getElementById('step-discussion'),
  stepHistory: document.getElementById('step-history'),
  
  // Member Setup
  memberForm: document.getElementById('add-member-form'),
  memberInput: document.getElementById('member-input'),
  membersList: document.getElementById('members-list'),
  memberCount: document.getElementById('member-count'),
  btnStartSession: document.getElementById('btn-start-session'),
  
  // Categories
  categoriesGrid: document.getElementById('categories-grid'),
  
  // Discussion
  currentCategoryBadge: document.getElementById('current-category-badge'),
  topicQuestion: document.getElementById('topic-question'),
  topicFollowup: document.getElementById('topic-followup'),
  btnNextTopic: document.getElementById('btn-next-topic'),
  btnFinishTopic: document.getElementById('btn-finish-topic'),
  
  // Timer
  timerDigits: document.getElementById('timer-digits'),
  btnTimerToggle: document.getElementById('btn-timer-toggle'),
  btnTimerReset: document.getElementById('btn-timer-reset'),
  timerDurationSelect: document.getElementById('timer-duration-select'),
  
  // Speakers
  shuffleArea: document.getElementById('shuffle-area'),
  btnRollSpeakers: document.getElementById('btn-roll-speakers'),
  speakersQueueList: document.getElementById('speakers-queue-list'),
  speakerActions: document.getElementById('speaker-actions'),
  btnNextSpeaker: document.getElementById('btn-next-speaker'),
  btnReshuffle: document.getElementById('btn-reshuffle'),
  
  // Modal & Opinions
  opinionModal: document.getElementById('opinion-modal'),
  recordCategory: document.getElementById('record-category'),
  recordQuestion: document.getElementById('record-question'),
  opinionForm: document.getElementById('opinion-form'),
  voteOptionA: document.getElementById('vote-option-a'),
  voteOptionB: document.getElementById('vote-option-b'),
  opinionNotes: document.getElementById('opinion-notes'),
  btnSaveOpinion: document.getElementById('btn-save-opinion'),
  
  // History
  btnShowHistory: document.getElementById('btn-show-history'),
  btnClearHistory: document.getElementById('btn-clear-history'),
  historyContainer: document.getElementById('history-container'),
  
  // Speaker Popups (Seq speaker popup)
  speakerPopup: document.getElementById('speaker-popup'),
  popupSpeakerName: document.getElementById('popup-speaker-name'),
  btnClosePopup: document.getElementById('btn-close-popup')
};

// Category Metadatas for Rendering Cards
const categoriesMeta = {
  general: { name: 'General', desc: 'Easy and casual everyday choices.', icon: 'smile', color: 'cat-general' },
  funny: { name: 'Funny', desc: 'Silly and hilarious dilemmas.', icon: 'laugh', color: 'cat-funny' },
  difficult: { name: 'Difficult', desc: 'Tough choices that make you think.', icon: 'brain', color: 'cat-difficult' },
  weird: { name: 'Weird', desc: 'Bizarre and magical situations.', icon: 'ghost', color: 'cat-weird' },
  food: { name: 'Food', desc: 'Taste buds and eating style wars.', icon: 'utensils', color: 'cat-food' },
  controversial: { name: 'Controversial', desc: 'Lightweight debating topics.', icon: 'users', color: 'cat-controversial' },
  clothing: { name: 'Clothing', desc: 'Style and fashion catastrophes.', icon: 'shirt', color: 'cat-clothing' },
  geography: { name: 'Geography', desc: 'Travel, weather, and world environments.', icon: 'globe', color: 'cat-geography' }
};

// ==========================================
// 3. INITIALIZATION & ROUTING
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  initUnusedQuestions();
  renderCategoryCards();
  loadArchivesFromStorage();
  setupEventListeners();
  
  // Make navigation globally accessible
  window.goToScreen = goToScreen;
  window.closeModal = closeModal;
  window.closeHistory = closeHistory;
  
  lucide.createIcons();
});

// Navigate between screens
function goToScreen(screenId) {
  // Hide all screens
  DOM.stepSetup.classList.remove('active');
  DOM.stepCategories.classList.remove('active');
  DOM.stepDiscussion.classList.remove('active');
  DOM.stepHistory.classList.remove('active');
  
  // Show target screen
  if (screenId === 'setup') {
    DOM.stepSetup.classList.add('active');
  } else if (screenId === 'categories') {
    DOM.stepCategories.classList.add('active');
    stopTimer();
  } else if (screenId === 'discussion') {
    DOM.stepDiscussion.classList.add('active');
  } else if (screenId === 'history') {
    DOM.stepHistory.classList.add('active');
  }
}

function showHistory() {
  renderHistoryList();
  goToScreen('history');
}

function closeHistory() {
  // If there's an active question, return to discussion, else to setup or categories
  if (state.currentQuestion) {
    goToScreen('discussion');
  } else if (state.members.length > 0) {
    goToScreen('categories');
  } else {
    goToScreen('setup');
  }
}

// ==========================================
// 4. MEMBERS REGISTER (STEP 1)
// ==========================================
function setupEventListeners() {
  // Add Member
  DOM.memberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = DOM.memberInput.value.trim();
    if (name) {
      addMember(name);
      DOM.memberInput.value = '';
      DOM.memberInput.focus();
    }
  });

  // Start Session Button
  DOM.btnStartSession.addEventListener('click', () => {
    if (state.members.length >= 2) {
      goToScreen('categories');
    }
  });

  // Next Topic Button
  DOM.btnNextTopic.addEventListener('click', () => {
    drawQuestion(state.selectedCategory);
    setupSpeakerRotation();
  });

  // End and Record Opinions Button
  DOM.btnFinishTopic.addEventListener('click', () => {
    openOpinionModal();
  });

  // Save Opinion to Archive
  DOM.opinionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveOpinionToArchive();
  });

  // History button
  DOM.btnShowHistory.addEventListener('click', showHistory);
  DOM.btnClearHistory.addEventListener('click', clearAllHistory);

  // Timer Controls
  DOM.btnTimerToggle.addEventListener('click', toggleTimer);
  DOM.btnTimerReset.addEventListener('click', resetTimer);
  DOM.timerDurationSelect.addEventListener('change', (e) => {
    state.timerDuration = parseInt(e.target.value, 10);
    resetTimer();
  });

  // Speaker Rotation Buttons
  DOM.btnRollSpeakers.addEventListener('click', startFirstSpeakerRoll);
  DOM.btnNextSpeaker.addEventListener('click', rotateSpeaker);
  DOM.btnReshuffle.addEventListener('click', reshuffleSpeakers);

  // Close Speaker Toast Popup
  DOM.btnClosePopup.addEventListener('click', closeSpeakerPopup);
}

function addMember(name) {
  // Prevent duplicate names
  if (state.members.includes(name)) {
    alert("This English name is already added.");
    return;
  }
  
  state.members.push(name);
  renderMembersList();
}

function removeMember(name) {
  state.members = state.members.filter(m => m !== name);
  renderMembersList();
}

function renderMembersList() {
  DOM.membersList.innerHTML = '';
  
  if (state.members.length === 0) {
    DOM.membersList.innerHTML = '<p class="placeholder-text">No members added yet.</p>';
    DOM.btnStartSession.disabled = true;
    DOM.memberCount.textContent = '0';
    return;
  }
  
  state.members.forEach((name, index) => {
    const colorClass = `badge-color-${index % 6}`;
    const badge = document.createElement('div');
    badge.className = `member-badge ${colorClass}`;
    badge.innerHTML = `
      <span>${name}</span>
      <button type="button" class="btn-remove-badge" onclick="event.stopPropagation(); removeMemberByName('${name}')">
        <i data-lucide="x" style="width: 14px; height: 14px;"></i>
      </button>
    `;
    DOM.membersList.appendChild(badge);
  });
  
  DOM.memberCount.textContent = state.members.length;
  DOM.btnStartSession.disabled = state.members.length < 2;
  
  // Re-bind Lucide icons inside badges
  lucide.createIcons();
}

// Bind to window for onclick removal inside string literal
window.removeMemberByName = function(name) {
  removeMember(name);
};

// ==========================================
// 5. CATEGORIES GRID (STEP 2)
// ==========================================
function renderCategoryCards() {
  DOM.categoriesGrid.innerHTML = '';
  
  for (const key in categoriesMeta) {
    const meta = categoriesMeta[key];
    const card = document.createElement('div');
    card.className = `category-card ${meta.color}`;
    card.innerHTML = `
      <div class="category-icon">
        <i data-lucide="${meta.icon}"></i>
      </div>
      <div class="category-info">
        <h3>${meta.name}</h3>
        <p>${meta.desc}</p>
      </div>
    `;
    
    card.addEventListener('click', () => {
      selectCategory(key);
    });
    
    DOM.categoriesGrid.appendChild(card);
  }
}

function selectCategory(catKey) {
  state.selectedCategory = catKey;
  DOM.currentCategoryBadge.textContent = categoriesMeta[catKey].name.toUpperCase();
  DOM.currentCategoryBadge.className = `category-badge ${categoriesMeta[catKey].color}`;
  
  // Draw first question
  drawQuestion(catKey);
  
  // Setup Speaker Rotation
  setupSpeakerRotation();
  
  // Navigate to Discussion Screen
  goToScreen('discussion');
}

// ==========================================
// 6. TOPIC ROOM LOGIC (STEP 3)
// ==========================================
function drawQuestion(catKey) {
  // If we ran out of questions, re-initialize pool
  if (!state.unusedQuestions[catKey] || state.unusedQuestions[catKey].length === 0) {
    state.unusedQuestions[catKey] = [...Array(topicsData[catKey].length).keys()];
  }
  
  const pool = state.unusedQuestions[catKey];
  const randomIndex = Math.floor(Math.random() * pool.length);
  const questionIndex = pool.splice(randomIndex, 1)[0];
  
  const item = topicsData[catKey][questionIndex];
  state.currentQuestion = item;
  
  // Render details
  DOM.topicQuestion.textContent = item.question;
  DOM.topicFollowup.textContent = item.followUp;
  
  // Add animation to card
  DOM.topicQuestion.style.animation = 'none';
  DOM.topicQuestion.offsetHeight; /* trigger reflow */
  DOM.topicQuestion.style.animation = 'screenFadeIn 0.3s ease-out';
}

// ==========================================
// 7. SPEAKER ROTATION & SEQUENTIAL POPUP (USER FEEDBACK)
// ==========================================
function setupSpeakerRotation() {
  // Reset speaker list state
  state.speakerOrder = [];
  state.currentSpeakerIndex = -1;
  
  // Reset views
  DOM.shuffleArea.classList.remove('hidden');
  DOM.speakersQueueList.classList.add('hidden');
  DOM.speakerActions.classList.add('hidden');
  
  stopTimer();
  resetTimer();
}

function startFirstSpeakerRoll() {
  DOM.btnRollSpeakers.disabled = true;
  DOM.btnRollSpeakers.innerHTML = '<i data-lucide="refresh-cw" class="animate-spin"></i> Shuffling...';
  lucide.createIcons();

  // Create shuffled copy of members
  const shuffled = [...state.members];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Simulate roulette/shuffle delay
  let count = 0;
  const interval = setInterval(() => {
    // Show randomized names flickering to create roulette effect
    const tempName = state.members[Math.floor(Math.random() * state.members.length)];
    DOM.shuffleArea.innerHTML = `<p class="placeholder-text">Selecting first speaker...</p><h2 style="color: var(--accent-cyan); font-size: 2.2rem;">${tempName}</h2>`;
    count++;
    if (count > 8) {
      clearInterval(interval);
      
      // Finalize Order
      state.speakerOrder = shuffled;
      state.currentSpeakerIndex = 0;
      
      // Transition display
      DOM.shuffleArea.classList.add('hidden');
      DOM.speakersQueueList.classList.remove('hidden');
      DOM.speakerActions.classList.remove('hidden');
      
      // Enable components
      DOM.btnRollSpeakers.disabled = false;
      DOM.btnRollSpeakers.innerHTML = '<i data-lucide="dices"></i> Determine Order';
      lucide.createIcons();
      
      // Render the queue
      renderSpeakersQueue();
      
      // Show Pop-up for the 1st Speaker
      triggerSpeakerPopup(state.speakerOrder[0]);
      
      // Auto-start Timer
      startTimer();
    }
  }, 150);
}

function reshuffleSpeakers() {
  if (confirm("Do you want to re-shuffle the speaker order for this topic?")) {
    setupSpeakerRotation();
    startFirstSpeakerRoll();
  }
}

function renderSpeakersQueue() {
  DOM.speakersQueueList.innerHTML = '';
  
  state.speakerOrder.forEach((name, index) => {
    const item = document.createElement('div');
    item.className = 'queue-item';
    
    let statusText = 'Pending';
    let statusClass = 'pending';
    
    if (index === state.currentSpeakerIndex) {
      item.classList.add('active');
      statusText = 'Speaking';
      statusClass = 'active';
    } else if (index < state.currentSpeakerIndex) {
      item.classList.add('spoke');
      statusText = 'Done';
      statusClass = 'spoke';
    }
    
    item.innerHTML = `
      <div class="queue-item-name">
        <span class="queue-num">#${index + 1}</span>
        <span>${name}</span>
      </div>
      <span class="status-indicator ${statusClass}">${statusText}</span>
    `;
    
    DOM.speakersQueueList.appendChild(item);
  });
  
  // Update Next Button label based on state
  if (state.currentSpeakerIndex === state.speakerOrder.length - 1) {
    DOM.btnNextSpeaker.innerHTML = 'Complete Session <i data-lucide="check"></i>';
  } else {
    DOM.btnNextSpeaker.innerHTML = 'Next Speaker <i data-lucide="chevron-right"></i>';
  }
  lucide.createIcons();
}

// Next speaker triggers sequential popup
function rotateSpeaker() {
  if (state.currentSpeakerIndex < state.speakerOrder.length - 1) {
    state.currentSpeakerIndex++;
    
    // Render updated order
    renderSpeakersQueue();
    
    // Popup next speaker (User feedback requirement)
    triggerSpeakerPopup(state.speakerOrder[state.currentSpeakerIndex]);
    
    // Reset and start timer
    resetTimer();
    startTimer();
  } else {
    // Session is complete for this topic
    stopTimer();
    openOpinionModal();
  }
}

// Sequential popups trigger
function triggerSpeakerPopup(speakerName) {
  DOM.popupSpeakerName.textContent = speakerName;
  DOM.speakerPopup.classList.add('active');
}

function closeSpeakerPopup() {
  DOM.speakerPopup.classList.remove('active');
}

// ==========================================
// 8. TIMER CONTROLS
// ==========================================
function toggleTimer() {
  if (state.timerIsRunning) {
    stopTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  if (state.timerIsRunning) return;
  
  state.timerIsRunning = true;
  DOM.btnTimerToggle.innerHTML = '<i data-lucide="pause"></i>';
  lucide.createIcons();
  
  state.timerInterval = setInterval(() => {
    if (state.timerTimeLeft > 0) {
      state.timerTimeLeft--;
      updateTimerDisplay();
      
      // Pulsating Danger effect when less than 10 seconds
      if (state.timerTimeLeft <= 10) {
        DOM.timerDigits.classList.add('danger');
      } else {
        DOM.timerDigits.classList.remove('danger');
      }
    } else {
      // Time is up
      stopTimer();
      DOM.timerDigits.classList.remove('danger');
      // Simple play warning tone or flash
      flashScreenNotification();
    }
  }, 1000);
}

function stopTimer() {
  state.timerIsRunning = false;
  DOM.btnTimerToggle.innerHTML = '<i data-lucide="play"></i>';
  lucide.createIcons();
  
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function resetTimer() {
  stopTimer();
  state.timerTimeLeft = state.timerDuration;
  DOM.timerDigits.classList.remove('danger');
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const mins = Math.floor(state.timerTimeLeft / 60);
  const secs = state.timerTimeLeft % 60;
  DOM.timerDigits.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function flashScreenNotification() {
  // Visual flash effect on the timer box
  DOM.timerDigits.style.backgroundColor = 'var(--accent-pink)';
  DOM.timerDigits.style.color = '#FFFFFF';
  
  setTimeout(() => {
    DOM.timerDigits.style.backgroundColor = 'var(--bg-app)';
    DOM.timerDigits.style.color = 'var(--accent-cyan)';
  }, 500);
}

// ==========================================
// 9. ARCHIVE & MEMORANDUM RECORDING (STEP 4)
// ==========================================
function openOpinionModal() {
  if (!state.currentQuestion) return;
  
  // Fill details
  DOM.recordCategory.textContent = categoriesMeta[state.selectedCategory].name.toUpperCase();
  DOM.recordCategory.className = `topic-meta-tag ${categoriesMeta[state.selectedCategory].color}`;
  DOM.recordQuestion.textContent = state.currentQuestion.question;
  
  // Reset form inputs
  DOM.voteOptionA.value = 0;
  DOM.voteOptionB.value = 0;
  DOM.opinionNotes.value = '';
  
  DOM.opinionModal.classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function saveOpinionToArchive() {
  const archiveItem = {
    id: Date.now(),
    date: new Date().toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    category: state.selectedCategory,
    question: state.currentQuestion.question,
    crew: [...state.members],
    votes: {
      optionA: parseInt(DOM.voteOptionA.value, 10) || 0,
      optionB: parseInt(DOM.voteOptionB.value, 10) || 0
    },
    notes: DOM.opinionNotes.value.trim()
  };
  
  state.archives.unshift(archiveItem); // new item first
  saveArchivesToStorage();
  
  closeModal('opinion-modal');
  
  // Show notification
  alert("Topic opinion saved successfully to the history log!");
  
  // Auto direct to History screen to show archive
  showHistory();
}

function saveArchivesToStorage() {
  localStorage.setItem('WYR_archives', JSON.stringify(state.archives));
}

function loadArchivesFromStorage() {
  const raw = localStorage.getItem('WYR_archives');
  if (raw) {
    try {
      state.archives = JSON.parse(raw);
    } catch(e) {
      state.archives = [];
    }
  }
}

// ==========================================
// 10. HISTORY VIEW (STEP 5)
// ==========================================
function renderHistoryList() {
  DOM.historyContainer.innerHTML = '';
  
  if (state.archives.length === 0) {
    DOM.historyContainer.innerHTML = '<p class="placeholder-text">No discussions recorded yet.</p>';
    return;
  }
  
  state.archives.forEach((item) => {
    const meta = categoriesMeta[item.category] || { name: item.category, color: 'cat-general' };
    const votesTotal = item.votes.optionA + item.votes.optionB;
    const voteRatioHtml = votesTotal > 0 
      ? ` | Vote: <strong>${item.votes.optionA}</strong> (A) vs <strong>${item.votes.optionB}</strong> (B)` 
      : '';
      
    const historyCard = document.createElement('div');
    historyCard.className = 'history-item';
    historyCard.innerHTML = `
      <div class="history-item-header">
        <span class="topic-meta-tag ${meta.color}">${meta.name.toUpperCase()}</span>
        <span class="history-item-date">${item.date}</span>
        <button class="btn-delete-history" onclick="deleteHistoryItem(${item.id})" title="Delete entry">
          <i data-lucide="trash" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <p class="history-item-q">${item.question}</p>
      <div class="history-item-meta">
        <span class="history-meta-badge">Crew: <strong>${item.crew.join(', ')}</strong></span>
        <span class="history-meta-badge">Participants: <strong>${item.crew.length}</strong>${voteRatioHtml}</span>
      </div>
      <div class="history-item-notes">
        ${item.notes ? item.notes : '<span style="color: var(--text-muted); font-style: italic;">No specific notes left.</span>'}
      </div>
    `;
    DOM.historyContainer.appendChild(historyCard);
  });
  
  lucide.createIcons();
}

window.deleteHistoryItem = function(id) {
  if (confirm("Do you want to delete this archive entry?")) {
    state.archives = state.archives.filter(item => item.id !== id);
    saveArchivesToStorage();
    renderHistoryList();
  }
};

function clearAllHistory() {
  if (state.archives.length === 0) return;
  
  if (confirm("Are you sure you want to clear the entire history log? This cannot be undone.")) {
    state.archives = [];
    saveArchivesToStorage();
    renderHistoryList();
  }
}
