export function getDepartments() {
    return [
        {
            name: "Tech Department",
            titleLarge: "Summary",
            paragraph: "1 In charge of automating the boring tasks to speed up and optimize workflow within the club. Also in charge of overseeing technical hackathons",
            titleSmall: "Summary",
            items: ["First item", "Second item", "Third item"],
        },

        {
            name: "PR & Activities",
            titleLarge: "Summary",
            paragraph: "2 In charge of automating the boring tasks to speed up and optimize workflow within the club. Also in charge of overseeing technical hackathons",
            titleSmall: "Summary",
            items: ["First item", "Second item", "Third item"],
        },
        {
            name: "Media & Marketing",
            titleLarge: "Summary",
            paragraph: "3 In charge of automating the boring tasks to speed up and optimize workflow within the club. Also in charge of overseeing technical hackathons",
            titleSmall: "Summary",
            items: ["First item", "Second item", "Third item"],
        },
        {
            name: "HR Department",
            titleLarge: "Summary",
            paragraph: "4 In charge of automating the boring tasks to speed up and optimize workflow within the club. Also in charge of overseeing technical hackathons",
            titleSmall: "Summary",
            items: ["First item", "Second item", "Third item"],
        }
    ]
}

export function getWorkshops(){
    return [
		{
			title: 'Flutter Mastery',
			description: 'Learning the basics of app development and fast paced components.',
			time: '3pm',
			date: '7th of January',
			iconURL: "/images/jj.svg"
		},
		{
			title: 'Flutter Mastery',
			description: 'Learning the basics of app development and fast paced components.',
			time: '3pm',
			date: '7th of January',
			iconURL: "/images/react.svg"
		},
		{
			title: 'Flutter Mastery',
			description: 'Learning the basics of app development and fast paced components.',
			time: '3pm',
			date: '7th of January',
			iconURL: "/images/git.svg"
		},
		{
			title: 'Flutter Mastery',
			description: 'Learning the basics of app development and fast paced components.',
			time: '3pm',
			date: '7th of January',
			iconURL: "/images/jj.svg"
		},
		{
			title: 'Flutter Mastery',
			description: 'Learning the basics of app development and fast paced components.',
			time: '3pm',
			date: '7th of January',
			iconURL: "/images/git.svg"
		},
	]
}

export function getPortfolios(){
    return [
        {
            "name": "Assem Emad",
            "role": "Leader",
            "avatar": "images/Mask-group.svg"
        },

        {
            "name": "Sana Saeed",
            "role": "Leader",
            "avatar": "images/Mask-group1.svg"
        }
    ]
}

export function sendContactUs(name, email, message) {
    alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
}