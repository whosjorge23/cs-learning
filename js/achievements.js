const achievementData = [
    {
        id: 'first-steps',
        title: 'First Steps',
        icon: '🌱',
        desc: 'Complete your first lesson.',
        check: (app) => app.completedLessons.length >= 1
    },
    {
        id: 'fast-learner',
        title: 'Fast Learner',
        icon: '🚀',
        desc: 'Complete 3 lessons.',
        check: (app) => app.completedLessons.length >= 3
    },
    {
        id: 'perfectionist',
        title: 'Perfectionist',
        icon: '🎯',
        desc: 'Maintain a GPA of 4.0.',
        check: (app) => app.gpa >= 4.0
    },
    {
        id: 'honor-roll',
        title: 'Honor Roll',
        icon: '📜',
        desc: 'Reach a GPA of 3.5 or higher.',
        check: (app) => app.gpa >= 3.5
    },
    {
        id: 'daily-discipline',
        title: 'Daily Discipline',
        icon: '🔥',
        desc: 'Reach a 3-day daily challenge streak.',
        check: (app) => app.streak >= 3
    },
    {
        id: 'week-warrior',
        title: 'Week Warrior',
        icon: '📅',
        desc: 'Reach a 7-day daily challenge streak.',
        check: (app) => app.streak >= 7
    },
    {
        id: 'sharp-mind',
        title: 'Sharp Mind',
        icon: '🧠',
        desc: 'Maintain an average quiz accuracy of 80% or higher.',
        check: (app) => app.getAverageAccuracy() >= 80
    },
    {
        id: 'precision-player',
        title: 'Precision Player',
        icon: '🎯',
        desc: 'Maintain an average quiz accuracy of 90% or higher.',
        check: (app) => app.getAverageAccuracy() >= 90
    },
    {
        id: 'foundations-finished',
        title: 'Foundations Finished',
        icon: '🏗️',
        desc: 'Complete every lesson in the Foundations path.',
        check: (app) => app.hasCompletedPath('Foundations')
    },
    {
        id: 'logic-runner',
        title: 'Logic Runner',
        icon: '🧩',
        desc: 'Complete every lesson in the Logic & Control Flow path.',
        check: (app) => app.hasCompletedPath('Logic & Control Flow')
    },
    {
        id: 'perfect-debut',
        title: 'Perfect Debut',
        icon: '🥇',
        desc: 'Get a perfect score on your first attempt in any lesson.',
        check: (app) => app.firstTryPerfectLessons.length >= 1
    },
    {
        id: 'flawless-trio',
        title: 'Flawless Trio',
        icon: '💯',
        desc: 'Earn perfect scores on the first try in 3 lessons.',
        check: (app) => app.firstTryPerfectLessons.length >= 3
    },
    {
        id: 'beginner-graduate',
        title: 'Beginner Graduate',
        icon: '🎓',
        desc: 'Complete every Beginner lesson.',
        check: (app) => app.getCompletedLessonsByLevel('Beginner') ===
            lessonData.filter(lesson => lesson.level === 'Beginner').length
    }
];
