import { getAge } from './helpers.js'

export const manifest = {
    questions: [
        {
            header: 'Personal Details',
            items: [
                {
                    key: 'Full Name',
                    label: 'Full Name',
                    type: 'string',
                    optional: false
                },
                {
                    key: 'Email Address',
                    label: "Email Address",
                    type: "string",
                    inputType: "email",
                    optional: false
                },
                {
                    key: 'Phone Number',
                    label: "Phone Number",
                    type: "string",
                    optional: false
                },
                {
                    key: 'Preferred Role(s)',
                    label: 'Preferred Role(s)',
                    type: "select",
                    options: [
                        "Any",
                        "Referee",
                        "Pit Admin",
                        "Field Reset",
                        "Queuing",
                        "Game Announcer/Emcee",
                        "Concessions/Merch Store",
                        "Media",
                        "FTAA",
                        "Other/Multiple"
                    ]
                },
                {
                    key: "Preferred Role(s): Other",
                    label: "Preferred Role(s): Other",
                    type: "string",
                    check: (data => data["Preferred Role(s)"] !== "Other/Multiple")
                },
                {
                    key: 'Experience',
                    label: 'Experience',
                    sublabel: 'What experience do you have in FRC?',
                    type: "paragraph",

                },
                {
                    key: "Dietary Restrictions",
                    label: "Dietary Restrictions",
                    sublabel: "This will help us ensure we have food options for everyone.",
                    type: "paragraph",
                    optional: true
                }
            ]
        },
    ]
}

export default manifest;

export const requiredList = (() => {
    const list = {};
    for (const section of manifest.questions) {
        section.items.filter(item => !item.optional).forEach(item => {
            list[item.key] = item.check ? (data => {
                console.log(item.key);
                console.log(!item.check(data) || data[item.key]);
                console.log(!item.check(data));
                console.log(data[item.key]);
                return item.check(data) || data[item.key];
            }) : (data => data[item.key]);
        });
    }
    return list;
})();
