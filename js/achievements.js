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
    }
];
