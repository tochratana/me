import json

en_history = [
  {
    "year": 2026,
    "items": [
      {
        "type": "short-course",
        "title": "Pre-University Program",
        "organization": "Service Listing",
        "period": "Dec 2025 – Jan 2026",
        "location": "Phnom Penh, Cambodia",
        "description": "Service Listing is a platform that allows users to list and find services in their community.",
        "technologies": ["React", "Node.js", "MongoDB", "TailwindCSS"],
        "certificate": "Certificate of Completion",
        "projects": [
          {
            "name": "Service Listing App",
            "description": "Built a platform to allow users to list and find local services."
          }
        ]
      }
    ]
  },
  {
    "year": 2025,
    "items": [
      {
        "type": "work",
        "title": "IT Professional",
        "organization": "Endora",
        "period": "Jul 2025 – Present",
        "location": "Phnom Penh, Cambodia",
        "description": "Endora is a developer-focused platform designed to generate and manage APIs efficiently. It helps developers quickly create RESTful APIs for different applications — reducing repetitive backend development work.",
        "technologies": ["React", "Next.js", "TypeScript", "Node.js", "API Design"]
      },
      {
        "type": "short-course",
        "title": "Full-Stack Developer",
        "organization": "Endora",
        "period": "Jul 2025 – Dec 2025",
        "location": "Phnom Penh, Cambodia",
        "description": "Hands-on training in full-stack development covering frontend frameworks, backend services, and deployment workflows.",
        "technologies": ["React", "Next.js", "TypeScript", "Node.js", "API Design"],
        "certificate": "Endora Full-Stack Developer Certificate",
        "projects": [
           {
             "name": "Endora API Platform",
             "description": "Contributed to the API generation logic and frontend dashboard."
           }
        ]
      },
      {
        "type": "event",
        "title": "Tech Community Meetup",
        "organization": "Cambodia Tech Community",
        "period": "Sep 2025",
        "location": "Phnom Penh, Cambodia",
        "description": "Participated in local tech meetups, networking with developers and learning about industry trends."
      },
      {
        "type": "certificate",
        "title": "Web Development Certificate",
        "organization": "Online Platform",
        "period": "Aug 2025",
        "description": "Completed a comprehensive web development certification covering modern frameworks and best practices."
      }
    ]
  },
  {
    "year": 2024,
    "items": [
      {
        "type": "university",
        "title": "Bachelor's in Computer Science",
        "organization": "Royal University of Phnom Penh",
        "period": "2024 – Present",
        "location": "Phnom Penh, Cambodia",
        "description": "Pursuing a degree in Computer Science with focus on software engineering, algorithms, and system design."
      },
      {
        "type": "short-course",
        "title": "Foundation Program",
        "organization": "FluentFlow",
        "period": "Oct 2024 – Oct 2025",
        "location": "Phnom Penh, Cambodia",
        "description": "Learned the foundations of web development and built multiple projects.",
        "technologies": ["React", "Next.js", "MongoDB", "Express", "REST APIs"],
        "projects": [
           {
             "name": "JobSeek",
             "description": "A modern job portal web application designed to connect job seekers with employers."
           }
        ]
      },
      {
        "type": "school",
        "title": "Graduated High School",
        "organization": "High School",
        "period": "2021 – 2024",
        "location": "Phnom Penh, Cambodia",
        "description": "Completed Grade 10–12 with a focus on science track studies. Discovered passion for programming and technology."
      },
      {
        "type": "competition",
        "title": "Coding Competition",
        "organization": "School Event",
        "period": "Mar 2024",
        "location": "Phnom Penh, Cambodia",
        "description": "Participated in a school-level coding competition, solving algorithmic challenges and building small projects."
      }
    ]
  },
  {
    "year": 2021,
    "items": [
      {
        "type": "school",
        "title": "Completed Secondary School",
        "organization": "Secondary School",
        "period": "2018 – 2021",
        "location": "Phnom Penh, Cambodia",
        "description": "Finished Grade 7–9. Deepened knowledge in sciences and mathematics. Started exploring basic computer skills and digital literacy."
      }
    ]
  },
  {
    "year": 2018,
    "items": [
      {
        "type": "school",
        "title": "Completed Primary School",
        "organization": "Primary School",
        "period": "2012 – 2018",
        "location": "Phnom Penh, Cambodia",
        "description": "Finished Grade 1–6. Built a strong foundation in math, science, and language arts. Developed early curiosity for technology."
      }
    ]
  }
]

km_history = [
  {
    "year": 2026,
    "items": [
      {
        "type": "short-course",
        "title": "កម្មវិធីត្រៀមចូលសកលវិទ្យាល័យ",
        "organization": "Service Listing",
        "period": "ធ្នូ ២០២៥ – មករា ២០២៦",
        "location": "ភ្នំពេញ កម្ពុជា",
        "description": "Service Listing គឺជាវេទិកាដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ស្វែងរក និងដាក់បញ្ចូលសេវាកម្មនៅក្នុងសហគមន៍របស់ពួកគេ។",
        "technologies": ["React", "Node.js", "MongoDB", "TailwindCSS"],
        "certificate": "វិញ្ញាបនបត្របញ្ជាក់ការសិក្សា",
        "projects": [
          {
            "name": "កម្មវិធី Service Listing",
            "description": "បានបង្កើតវេទិកាដើម្បីអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ស្វែងរក និងដាក់បញ្ចូលសេវាកម្មក្នុងស្រុក។"
          }
        ]
      }
    ]
  },
  {
    "year": 2025,
    "items": [
      {
        "type": "work",
        "title": "អ្នកជំនាញផ្នែកព័ត៌មានវិទ្យា",
        "organization": "Endora",
        "period": "កក្កដា ២០២៥ – បច្ចុប្បន្ន",
        "location": "ភ្នំពេញ កម្ពុជា",
        "description": "Endora គឺជាវេទិកាផ្តោតលើអ្នកអភិវឌ្ឍន៍ដែលបានរចនាឡើងដើម្បីបង្កើត និងគ្រប់គ្រង APIs យ៉ាងមានប្រសិទ្ធភាព។ វាជួយអ្នកអភិវឌ្ឍន៍បង្កើត RESTful APIs បានយ៉ាងឆាប់រហ័ស សម្រាប់កម្មវិធីផ្សេងៗ — កាត់បន្ថយការងារអភិវឌ្ឍន៍ខាងក្រោយដែលដដែលៗ។",
        "technologies": ["React", "Next.js", "TypeScript", "Node.js", "API Design"]
      },
      {
        "type": "short-course",
        "title": "អ្នកអភិវឌ្ឍន៍ Full-Stack",
        "organization": "Endora",
        "period": "កក្កដា ២០២៥ – ធ្នូ ២០២៥",
        "location": "ភ្នំពេញ កម្ពុជា",
        "description": "ការបណ្តុះបណ្តាលជាក់ស្តែងក្នុងការអភិវឌ្ឍន៍ Full-stack គ្របដណ្តប់លើ frontend frameworks សេវាកម្មខាងក្រោយ និងដំណើរការដាក់ឱ្យដំណើរការ។",
        "technologies": ["React", "Next.js", "TypeScript", "Node.js", "API Design"],
        "certificate": "វិញ្ញាបនបត្រអ្នកអភិវឌ្ឍន៍ Full-Stack Endora",
        "projects": [
           {
             "name": "Endora API Platform",
             "description": "បានចូលរួមចំណែកដល់តក្កវិជ្ជាបង្កើត API និងផ្ទាំងគ្រប់គ្រង frontend។"
           }
        ]
      },
      {
        "type": "event",
        "title": "ការជួបជុំសហគមន៍បច្ចេកវិទ្យា",
        "organization": "Cambodia Tech Community",
        "period": "កញ្ញា ២០២៥",
        "location": "ភ្នំពេញ កម្ពុជា",
        "description": "បានចូលរួមក្នុងការជួបជុំបច្ចេកវិទ្យាក្នុងស្រុក បណ្តាញជាមួយអ្នកអភិវឌ្ឍន៍ និងការរៀនអំពីនិន្នាការក្នុងឧស្សាហកម្ម។"
      },
      {
        "type": "certificate",
        "title": "វិញ្ញាបនបត្រអភិវឌ្ឍន៍គេហទំព័រ",
        "organization": "Online Platform",
        "period": "សីហា ២០២៥",
        "description": "បានបញ្ចប់ការទទួលបានវិញ្ញាបនបត្រអភិវឌ្ឍន៍គេហទំព័រដ៏ទូលំទូលាយ គ្របដណ្តប់លើ frameworks ទំនើបៗ និងការអនុវត្តល្អៗ។"
      }
    ]
  },
  {
    "year": 2024,
    "items": [
      {
        "type": "university",
        "title": "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ",
        "organization": "សកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
        "period": "២០២៤ – បច្ចុប្បន្ន",
        "location": "ភ្នំពេញ កម្ពុជា",
        "description": "កំពុងសិក្សាថ្នាក់បរិញ្ញាបត្រផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ ដោយផ្តោតលើវិស្វកម្មសូហ្វវែរ ក្បួនដោះស្រាយ និងការរចនាប្រព័ន្ធ។"
      },
      {
        "type": "short-course",
        "title": "កម្មវិធីមូលដ្ឋាន",
        "organization": "FluentFlow",
        "period": "តុលា ២០២៤ – តុលា ២០២៥",
        "location": "ភ្នំពេញ កម្ពុជា",
        "description": "បានរៀនពីមូលដ្ឋានគ្រឹះនៃការអភិវឌ្ឍន៍គេហទំព័រ និងបានបង្កើតគម្រោងជាច្រើន។",
        "technologies": ["React", "Next.js", "MongoDB", "Express", "REST APIs"],
        "projects": [
           {
             "name": "JobSeek",
             "description": "កម្មវិធីគេហទំព័រស្វែងរកការងារទំនើបដែលបានរចនាឡើងដើម្បីភ្ជាប់អ្នកស្វែងរកការងារជាមួយនិយោជក។"
           }
        ]
      },
      {
        "type": "school",
        "title": "បញ្ចប់ការសិក្សាវិទ្យាល័យ",
        "organization": "វិទ្យាល័យ",
        "period": "២០២១ – ២០២៤",
        "location": "ភ្នំពេញ កម្ពុជា",
        "description": "បានបញ្ចប់ថ្នាក់ទី ១០-១២ ដោយផ្តោតលើការសិក្សាផ្នែកវិទ្យាសាស្ត្រ។ បានរកឃើញចំណង់ចំណូលចិត្តចំពោះការសរសេរកូដ និងបច្ចេកវិទ្យា។"
      },
      {
        "type": "competition",
        "title": "ការប្រកួតប្រជែងសរសេរកូដ",
        "organization": "ព្រឹត្តិការណ៍សាលា",
        "period": "មីនា ២០២៤",
        "location": "ភ្នំពេញ កម្ពុជា",
        "description": "បានចូលរួមក្នុងការប្រកួតប្រជែងសរសេរកូដកម្រិតសាលា ការដោះស្រាយបញ្ហាក្បួនដោះស្រាយ និងការបង្កើតគម្រោងតូចៗ។"
      }
    ]
  },
  {
    "year": 2021,
    "items": [
      {
        "type": "school",
        "title": "បញ្ចប់អនុវិទ្យាល័យ",
        "organization": "អនុវិទ្យាល័យ",
        "period": "២០១៨ – ២០២១",
        "location": "ភ្នំពេញ កម្ពុជា",
        "description": "បានបញ្ចប់ថ្នាក់ទី ៧-៩។ ធ្វើឱ្យចំណេះដឹងផ្នែកវិទ្យាសាស្ត្រ និងគណិតវិទ្យាកាន់តែស៊ីជម្រៅ។ ចាប់ផ្តើមស្វែងយល់ពីជំនាញកុំព្យូទ័រជាមូលដ្ឋាន និងអក្ខរកម្មឌីជីថល។"
      }
    ]
  },
  {
    "year": 2018,
    "items": [
      {
        "type": "school",
        "title": "បញ្ចប់បឋមសិក្សា",
        "organization": "បឋមសិក្សា",
        "period": "២០១២ – ២០១៨",
        "location": "ភ្នំពេញ កម្ពុជា",
        "description": "បានបញ្ចប់ថ្នាក់ទី ១-៦។ កសាងមូលដ្ឋានគ្រឹះរឹងមាំផ្នែកគណិតវិទ្យា វិទ្យាសាស្ត្រ និងសិល្បៈភាសា។ អភិវឌ្ឍការចង់ដឹងចង់ឃើញដំបូងសម្រាប់បច្ចេកវិទ្យា។"
      }
    ]
  }
]

for file, hist in [("src/locales/en.json", en_history), ("src/locales/km.json", km_history)]:
    with open(file, "r") as f:
        data = json.load(f)
    data["about"]["timeline"]["history"] = hist
    with open(file, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

print("Updated locales successfully.")
