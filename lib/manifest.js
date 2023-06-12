import { getAge } from './helpers.js'

export const manifest = {
  questions: [
    {
      header: 'Team Details',
      label: 'Individuals attending without a team are not required to register.',
      items: [
        {
          key: 'Team Number',
          label: 'Team Number',
          type: 'string',
          optional: false
        },
        {
          key: 'Team Name',
          label: 'Team Name',
          type: 'string',
          optional: false
        },
        {
          key: "Would you like a table in your pit?",
          label: "Would you like a table in your pit?",
          type: "select",
          options: ["Yes", "No"]
        },
        {
          key: "Estimated Attendance",
          label: "Estimated Attendance",
          type: "string",
          optional: true
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
    {
      header: "Primary Contact Info",
      label: "Please fill this out with the information of a lead mentor or coach.",
      items: [
        {
          key: 'Full Name',
          label: "Full Name",
          type: "string",
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
