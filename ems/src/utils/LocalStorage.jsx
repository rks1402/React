const employees = [
    {
      "id": 1,
      "firstName": "Amit",
      "email": "e@e.com",
      "password": "123",
      "tasks": [
        {
          "title": "Complete project report",
          "description": "Finish the project report for Q1",
          "date": "2024-10-15",
          "category": "Work",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team meeting",
          "description": "Participate in the monthly team meeting",
          "date": "2024-10-10",
          "category": "Meetings",
          "active": false,
          "new_task": true,
          "completed": true,
          "failed": false
        },
        {
          "title": "Client feedback review",
          "description": "Review feedback from clients",
          "date": "2024-10-12",
          "category": "Work",
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskNumber": {
        "active": 2,
        "new_task": 1,
        "completed": 2,
        "failed": 0
      }
    },
    {
      "id": 2,
      "firstName": "Priya",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Marketing plan",
          "description": "Develop marketing strategy for the next quarter",
          "date": "2024-10-18",
          "category": "Work",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Website update",
          "description": "Make necessary changes to the company website",
          "date": "2024-10-09",
          "category": "Development",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Client presentation",
          "description": "Prepare and present a demo to clients",
          "date": "2024-10-14",
          "category": "Work",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Training",
          "description": "Complete training for new software",
          "date": "2024-10-12",
          "category": "Learning",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumber": {
        "active": 3,
        "new_task": 2,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 3,
      "firstName": "Rahul",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Email campaigns",
          "description": "Set up automated email campaigns",
          "date": "2024-10-07",
          "category": "Marketing",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": true
        },
        {
          "title": "Bug fixes",
          "description": "Fix bugs in the backend system",
          "date": "2024-10-08",
          "category": "Development",
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Data analysis",
          "description": "Analyze data from recent campaigns",
          "date": "2024-10-06",
          "category": "Analytics",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskNumber": {
        "active": 2,
        "new_task": 1,
        "completed": 2,
        "failed": 1
      }
    },
    {
      "id": 4,
      "firstName": "Sneha",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Social media updates",
          "description": "Post updates on social media platforms",
          "date": "2024-10-05",
          "category": "Marketing",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Internal documentation",
          "description": "Update internal process documentation",
          "date": "2024-10-09",
          "category": "Work",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client follow-up",
          "description": "Follow up with clients on recent inquiries",
          "date": "2024-10-11",
          "category": "Work",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Code review",
          "description": "Review code from the development team",
          "date": "2024-10-10",
          "category": "Development",
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskNumber": {
        "active": 3,
        "new_task": 2,
        "completed": 2,
        "failed": 0
      }
    },
    {
      "id": 5,
      "firstName": "Vikram",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "System upgrade",
          "description": "Upgrade the internal software system",
          "date": "2024-10-08",
          "category": "Development",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "User training",
          "description": "Train users on the new system",
          "date": "2024-10-11",
          "category": "Learning",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Project planning",
          "description": "Plan the next software project",
          "date": "2024-10-12",
          "category": "Work",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumber": {
        "active": 2,
        "new_task": 2,
        "completed": 1,
        "failed": 0
      }
    }
  ]
  
  const admin = [{
    "id": 1,
    "firstName": "Rohit",
    "email": "admin@example.com",
    "password": "123"
  }]
  

  
export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}