const topicsData = {
  general: [
    // Original General (10)
    {
      question: "Would you rather have more time or more money?",
      followUp: "Would you play a lottery where the prize was extra time?"
    },
    {
      question: "Would you rather be able to sing beautifully or speak any foreign language fluently?",
      followUp: "Which do you think is harder to master?"
    },
    {
      question: "Would you rather be the world’s fastest runner or own the world’s fastest car?",
      followUp: "Which do you think would be more useful?"
    },
    {
      question: "Would you rather be able to fly or breathe underwater?",
      followUp: "What’s the longest you can hold your breath for?"
    },
    {
      question: "Would you rather go to the cinema or attend a concert?",
      followUp: "What’s your favourite film?"
    },
    {
      question: "Would you rather be stuck indoors on a beautiful day or stuck outdoors in terrible weather?",
      followUp: "What do you like to do when the weather is bad?"
    },
    {
      question: "Would you rather be poor but happy, or rich but miserable?",
      followUp: "Can money buy happiness?"
    },
    {
      question: "Would you rather travel to a relaxing destination or an exciting one?",
      followUp: "Where did you go for your last vacation?"
    },
    {
      question: "Would you rather play video games or sports?",
      followUp: "What was the last game or sport you played?"
    },
    {
      question: "Would you rather have super speed or super strength?",
      followUp: "What would you do with your superpower?"
    },
    // Original Clothing (10)
    {
      question: "Would you rather wear too many layers in the summer, or not enough clothes in the winter?",
      followUp: "What is your favorite winter outfit?"
    },
    {
      question: "Would you rather wear clothes that are comfortable but look bad, or clothes that look amazing but are very uncomfortable?",
      followUp: "What is your favorite item of clothing?"
    },
    {
      question: "Would you rather donate your old clothes to charity or sell them online?",
      followUp: "How often do you clean out your closet?"
    },
    {
      question: "Would you rather buy brand-new clothes or shop at second-hand stores?",
      followUp: "What is the best deal you've ever gotten on clothing?"
    },
    {
      question: "Would you rather repair your own clothes or just replace them?",
      followUp: "Do you know how to sew or fix a button?"
    },
    {
      question: "Would you rather wear a stylish costume or a hilarious one to a costume party?",
      followUp: "What is the best costume you have ever worn?"
    },
    {
      question: "Would you rather have a minimalist wardrobe of clothes you love, or a huge closet of clothes you rarely wear?",
      followUp: "Which article of clothing is your absolute favorite?"
    },
    {
      question: "Would you rather wear a beanie or gloves in the snow?",
      followUp: "What do you usually wear when it snows?"
    },
    {
      question: "Would you rather make all of your own clothes or borrow everything you wear?",
      followUp: "Have you ever tried making or customizing your clothes?"
    },
    {
      question: "Would you rather wear an outfit that is all the same color, or all the same material?",
      followUp: "What is your favorite clothing material (e.g., cotton, denim, silk)?"
    },
    // Original Geography (10)
    {
      question: "Would you rather live in a very hot climate or a very cold climate?",
      followUp: "What is your ideal weather?"
    },
    {
      question: "Would you rather live in a wealthy country or a country with beautiful natural scenery?",
      followUp: "Which country would you love to visit for its nature?"
    },
    {
      question: "Would you rather visit five countries in five days, or spend two weeks exploring just two countries?",
      followUp: "Do you prefer fast-paced travel or slow travel?"
    },
    {
      question: "Would you rather live near a volcano or near a swamp?",
      followUp: "Which environment sounds more dangerous to you?"
    },
    {
      question: "Would you rather lead a small, wealthy country or a large, poor country?",
      followUp: "What would be your first act as a national leader?"
    },
    {
      question: "Would you rather live near the ocean or in the quiet countryside?",
      followUp: "How often do you go to the beach?"
    },
    {
      question: "Would you rather live in a beautiful neighborhood far from your workplace, or in a rough neighborhood close to work?",
      followUp: "How long is your daily commute?"
    },
    {
      question: "Would you rather live in a small, quiet town or a bustling big city?",
      followUp: "What are the pros and cons of your current neighborhood?"
    },
    {
      question: "Would you rather use a navigation app that always gives wrong directions, or have no navigation tools at all?",
      followUp: "Have you ever gotten seriously lost?"
    },
    {
      question: "Would you rather travel by train or by plane?",
      followUp: "Do you enjoy train rides?"
    },
    // Original Food (10)
    {
      question: "Would you rather eat cheese with chocolate or beef with ice cream?",
      followUp: "What is the weirdest food combination you actually enjoy?"
    },
    {
      question: "Would you rather eat hamburgers every day or never eat them again?",
      followUp: "How long do you think you could survive eating only burgers?"
    },
    {
      question: "Would you rather eat an amazing meal at a sketchy restaurant, or a terrible meal at a luxury restaurant?",
      followUp: "What is the most memorable meal you've ever had?"
    },
    {
      question: "Would you rather be extremely hungry or extremely thirsty?",
      followUp: "What’s the longest you’ve gone without eating?"
    },
    {
      question: "Would you rather go out for dinner or order takeout?",
      followUp: "What is your go-to takeout food?"
    },
    {
      question: "Would you rather eat ice cream on a hot day or drink hot chocolate on a cold day?",
      followUp: "Which flavour of ice cream is your favourite?"
    },
    {
      question: "Would you rather be a chef or a server?",
      followUp: "Do you enjoy cooking for others?"
    },
    {
      question: "Would you rather eat three days' worth of food in a single day, or stretch one day's worth of food over three days?",
      followUp: "What’s the most food you’ve ever eaten in one sitting?"
    },
    {
      question: "Would you rather eat only chocolate for an entire day, or only broccoli?",
      followUp: "What’s the most chocolate you’ve ever eaten?"
    },
    {
      question: "Would you rather eat peas with chopsticks or soup with a fork?",
      followUp: "How good are you at using chopsticks?"
    }
  ],
  funny: [
    // Original Funny (10)
    {
      question: "Would you rather be a mouse on vacation or a lion at work?",
      followUp: "Which do you think would be more stressful?"
    },
    {
      question: "Would you rather live in a house made of chocolate or a house made of french fries?",
      followUp: "Which do you think would be easier to maintain?"
    },
    {
      question: "Would you rather have the ability to make anyone laugh or always be able to make yourself laugh?",
      followUp: "Who is the funniest comedian you know?"
    },
    {
      question: "Would you rather constantly stink or have everyone else stink (while you smell fine)?",
      followUp: "How would you survive in a world where everyone smells bad?"
    },
    {
      question: "Would you rather marry a fish or a potato?",
      followUp: "Which one would make a better listener?"
    },
    {
      question: "Would you rather fight Santa Claus or one of his reindeer?",
      followUp: "Do you think you'd end up on the naughty list forever?"
    },
    {
      question: "Would you rather dance with a sloth or a chimpanzee?",
      followUp: "Who do you think would have better dance moves?"
    },
    {
      question: "Would you rather slip on ice or slip on a banana peel?",
      followUp: "Which fall would be more embarrassing?"
    },
    {
      question: "Would you rather laugh so hard you cry or cry so hard you laugh?",
      followUp: "When was the last time you laughed until you cried?"
    },
    {
      question: "Would you rather have an onion or a cabbage for a head?",
      followUp: "How would you style your 'hair'?"
    },
    // Original Weird (10)
    {
      question: "Would you rather have a pillow or a piece of cheese as a pet?",
      followUp: "How would you walk a pet pillow?"
    },
    {
      question: "Would you rather be abducted by aliens or kidnapped by vampires?",
      followUp: "Which creature do you think would be friendlier?"
    },
    {
      question: "Would you rather be a plant or a rock?",
      followUp: "Do you think life as a plant would be peaceful?"
    },
    {
      question: "Would you rather have a pig’s brain in a human body or a human brain in a pig’s body?",
      followUp: "Which of these would be harder to live with?"
    },
    {
      question: "Would you rather wear a hat made of jam or shoes made of chocolate?",
      followUp: "What would you do on a hot, sunny day?"
    },
    {
      question: "Would you rather live on the moon or at the bottom of the ocean?",
      followUp: "What do you think the view would be like?"
    },
    {
      question: "Would you rather be a cartoon character or a puppet?",
      followUp: "What is your favorite animated movie or show?"
    },
    {
      question: "Would you rather sit next to a dog or a chicken on a long flight?",
      followUp: "What is the worst flight experience you've had?"
    },
    {
      question: "Would you rather live in a world where everything is upside down or where everything is blue?",
      followUp: "How would you eat in an upside-down world?"
    },
    {
      question: "Would you rather brush your teeth with dry spaghetti or a banana?",
      followUp: "What do you think your dentist would say?"
    }
  ],
  controversial: [
    // Original Controversial (10)
    {
      question: "Would you rather end world hunger or grant your friends and family immortality?",
      followUp: "What is the best way to help end world hunger?"
    },
    {
      question: "Would you rather everyone live forever, or have everyone pass away painlessly at a set age?",
      followUp: "What would be the biggest problem in a world where no one dies?"
    },
    {
      question: "Would you rather wrongfully imprison an innocent person, or let a guilty person go free?",
      followUp: "Have you ever been falsely accused of something?"
    },
    {
      question: "Would you rather sacrifice one person to save a thousand, or do nothing?",
      followUp: "Do you think doing nothing makes you less responsible?"
    },
    {
      question: "Would you rather resort to cannibalism to survive, or starve to death?",
      followUp: "Have you seen any movies or read stories about extreme survival?"
    },
    {
      question: "Would you rather legalize all recreational drugs or ban guns worldwide?",
      followUp: "Do you think banning guns reduces crime?"
    },
    {
      question: "Would you rather allow stem cell research to save lives, or ban it because of ethical concerns?",
      followUp: "How much do you know about stem cell research?"
    },
    {
      question: "Would you rather have only evolution taught in schools, or only creationism?",
      followUp: "Do you think schools should teach both?"
    },
    {
      question: "Would you rather support marriage equality for everyone, or restrict marriage to traditional definitions?",
      followUp: "Do you think marriage is still an important institution today?"
    },
    {
      question: "Would you rather have universal healthcare for everyone, or a system where only those who can afford it get care?",
      followUp: "How does the healthcare system work in your country?"
    },
    // Original Difficult (10)
    {
      question: "Would you rather win $1,000,000 or have your best friend win $3,000,000?",
      followUp: "If they won, do you think they would share it with you?"
    },
    {
      question: "Would you rather travel to the past or the future?",
      followUp: "If it were a one-way trip, which would you choose?"
    },
    {
      question: "Would you rather have unlimited money but never be able to buy food, or have unlimited food but absolutely no money?",
      followUp: "How would you survive in either situation?"
    },
    {
      question: "Would you rather be best friends with a celebrity or have your dream job?",
      followUp: "Have you ever met a celebrity?"
    },
    {
      question: "Would you rather fall into a cactus or walk on broken glass?",
      followUp: "Do you have a high pain tolerance?"
    },
    {
      question: "Would you rather climb Mount Everest or run three marathons back-to-back?",
      followUp: "What is the most physically challenging thing you've ever done?"
    },
    {
      question: "Would you rather not shower for a week or not brush your teeth for a week?",
      followUp: "What’s the longest you’ve ever gone without a shower?"
    },
    {
      question: "Would you rather be trapped in a room full of spiders or a room full of snakes?",
      followUp: "How long do you think you could survive in that room?"
    },
    {
      question: "Would you rather be a professional athlete or a famous actor/actress?",
      followUp: "Which career sounds more exciting to you?"
    },
    {
      question: "Would you rather be a king for a day or the mayor of a major city for a month?",
      followUp: "What is the first rule or law you would make?"
    }
  ],
  business: [
    {
      question: "Would you rather work with a highly competent colleague who has a terrible personality, or a friendly, kind colleague who is bad at their job?",
      followUp: "Which trait do you think is harder to tolerate in the long run?"
    },
    {
      question: "Would you rather have a boss who micromanages every detail of your work, or a boss who is completely hands-off and never gives guidance?",
      followUp: "Which type of boss do you think is worse for your career growth?"
    },
    {
      question: "Would you rather earn a very high salary but work 70 hours a week, or earn a modest salary and work strictly 40 hours a week with no overtime?",
      followUp: "How much does free time contribute to your overall life satisfaction?"
    },
    {
      question: "Would you rather be the top performer at a small, unknown startup, or an average employee at a giant, prestigious global corporation?",
      followUp: "Which option do you think offers better learning opportunities?"
    },
    {
      question: "Would you rather work on a product you love but in a toxic workplace culture, or work in an amazing workplace culture on a product you find completely boring?",
      followUp: "Can a great team culture make up for uninspiring work?"
    },
    {
      question: "Would you rather give a 15-minute presentation to the entire executive team, or receive a very blunt, critical performance review from your direct manager?",
      followUp: "Which of these situations makes you feel more anxious?"
    },
    {
      question: "Would you rather work 100% remotely from home forever, or work in a beautiful modern office with free gourmet meals and high-end perks?",
      followUp: "What is the biggest challenge of working from home for you?"
    },
    {
      question: "Would you rather work at a company where you are expected to answer messages instantly at any hour, or a company where colleagues take days to reply to your emails?",
      followUp: "How do you set healthy boundaries with communication at work?"
    },
    {
      question: "Would you rather launch an imperfect product quickly to get user feedback, or delay the launch for months to ensure everything is polished to perfection?",
      followUp: "Which approach do you think is riskier in today’s market?"
    },
    {
      question: "Would you rather take a promotion that comes with a massive pay increase but extreme stress, or stay in your current comfortable role indefinitely?",
      followUp: "What is your main motivation when seeking a promotion?"
    },
    {
      question: "Would you rather complete a high-profile project entirely by yourself with double the workload, or collaborate with a slow team where you have to share all the credit?",
      followUp: "Do you prefer working alone or in a team?"
    },
    {
      question: "Would you rather stay in a secure but completely unfulfilling job for the rest of your career, or take a massive pay cut to pursue a risky new career path you are passionate about?",
      followUp: "How important is passion compared to financial security in a career?"
    },
    {
      question: "Would you rather be the hardest worker who gets zero public recognition, or the charismatic talker who gets promoted by taking credit for others' ideas?",
      followUp: "How much does self-promotion matter in your current workplace?"
    },
    {
      question: "Would you rather work in a company with absolutely no meetings where everything is done via text, or a company with daily video calls for every minor update?",
      followUp: "What is your biggest frustration with office meetings?"
    },
    {
      question: "Would you rather work for an inspiring, supportive boss at a struggling company with a bad reputation, or a toxic, demotivating boss at a highly successful, world-class company?",
      followUp: "Does a bad boss outweigh a great company name?"
    },
    {
      question: "Would you rather spend your career as an individual expert solving technical problems, or step into a managerial role resolving team conflicts and attending meetings?",
      followUp: "Which path do you see yourself pursuing in the future?"
    },
    {
      question: "Would you rather work flexible hours where you might be messaged late at night, or a strict 9-to-5 schedule where you are completely cut off after hours?",
      followUp: "How do you manage your work-life boundaries?"
    },
    {
      question: "Would you rather communicate with clients and colleagues only through email, or only through phone calls and video chats?",
      followUp: "Which form of communication makes you feel more comfortable?"
    },
    {
      question: "Would you rather work at a company that offers unlimited unpaid vacation days, or a company with standard vacation days but a guaranteed annual bonus?",
      followUp: "Does 'unlimited vacation' work in practice?"
    },
    {
      question: "Would you rather work in a fast-paced environment where priorities change daily, or a highly structured company where making a simple change takes months of approvals?",
      followUp: "Which type of environment suits your working style better?"
    },
    {
      question: "Would you rather work at a company where everyone's exact salary is publicly listed, or a company where discussing pay is strictly forbidden?",
      followUp: "Do you think salary transparency creates a healthier workplace?"
    },
    {
      question: "Would you rather work in an open-plan office with zero privacy but lots of collaboration, or a private cubicle where you are isolated but can focus completely?",
      followUp: "What is your ideal physical office setup?"
    },
    {
      question: "Would you rather have AI automate 80% of your current daily tasks so you can focus on strategy, or keep doing everything manually to ensure job security?",
      followUp: "Are you worried about AI replacing parts of your job?"
    },
    {
      question: "Would you rather work in a noisy office with constant chatter and background music, or a dead-silent office where you can hear a pin drop?",
      followUp: "How do you handle noise distractions while working?"
    },
    {
      question: "Would you rather be overqualified for a job where you can finish all your work easily, or be promoted to a role that is slightly beyond your current skills and causes constant stress?",
      followUp: "Do you prefer comfort or rapid growth in your career?"
    },
    {
      question: "Would you rather wear a formal suit or business attire to work every day, or be allowed to wear sweatpants and hoodies but have clients take you less seriously?",
      followUp: "Does how you dress at work affect your professional confidence?"
    },
    {
      question: "Would you rather work in an understaffed team where you are constantly busy but highly valued, or an overstaffed team where you have very little to do all day?",
      followUp: "Which scenario leads to faster burnout?"
    },
    {
      question: "Would you rather take a two-week remote 'workation' from a tropical beach, or have a five-day vacation where you are completely offline?",
      followUp: "Can you truly relax if you are working remotely from a vacation spot?"
    },
    {
      question: "Would you rather spend your training budget on learning a new technical skill, or a workshop on public speaking and emotional intelligence?",
      followUp: "Which type of skill has been more useful in your career?"
    },
    {
      question: "Would you rather work as a freelancer with total freedom over your schedule but an unstable income, or a full-time corporate employee with a predictable paycheck but rigid rules?",
      followUp: "Have you ever considered freelancing or starting your own business?"
    }
  ]
};
