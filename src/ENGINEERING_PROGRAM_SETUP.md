# Engineering Program Setup Guide

## Overview
The Engineering program has been updated to display detailed information about three program tiers: Dream Foundation, Dream Explorer, and Dream Achiever. To make this work, you need to:

1. Create a new CMS collection called "Program Tiers"
2. Add the Engineering program data to this collection
3. Link the tiers to the Engineering program

## Step 1: Create the "Program Tiers" CMS Collection

Go to your Wix Dashboard → Database and create a new collection with these specifications:

**Collection Name:** Program Tiers
**Collection ID:** programtiers

### Fields to Add:

| Field Name | Field Type | Display Name |
|-----------|-----------|--------------|
| tierName | Text | Tier Name |
| tierLevel | Text | Tier Level |
| classRange | Text | Class Range |
| objective | Text | Objective |
| roles | Text | Roles |
| goalStatement | Text | Goal Statement |
| syllabusStyle | Text | Syllabus Style |
| syllabusModules | Text | Syllabus Modules |
| syllabusOutcome | Text | Syllabus Outcome |
| programId | Reference | Program ID (link to Programs collection) |

## Step 2: Add Engineering Program Data

First, ensure you have an "Engineering" program in the Programs collection. If not, create one with:
- **programName:** Engineering
- **programCategory:** Technology
- **shortDescription:** A comprehensive program covering software development, AI, data science, and more

Then, add three items to the Program Tiers collection:

### Tier 1: Dream Foundation (Class 6-8)

```
tierName: ENGINEERING – DREAM FOUNDATION
tierLevel: Foundation
classRange: Class 6–8
objective: Awareness + fun + interest building
roles: Junior Software Creator
Junior AI Explorer
Junior Robotics Engineer
Junior Game Developer ⭐
Junior Cyber Safety Expert
Junior Data Thinker
goalStatement: Mujhe technology me future chahiye
syllabusStyle: No exams
No heavy coding
Visual + activities
syllabusModules: Technology Around Us
Logic & Thinking (Scratch, puzzles)
Mini Tech Worlds (games, robots)
Safety & Ethics
syllabusOutcome: Coding fun hai, mujhe tech pasand hai
programId: [ID of Engineering program]
```

### Tier 2: Dream Explorer (Class 9-10)

```
tierName: ENGINEERING – DREAM EXPLORER
tierLevel: Explorer
classRange: Class 9–10
objective: Career clarity + skill exploration
roles: Trending & High Demand:
• Software Development Engineer
• Data Scientist Engineer
• Machine Learning Engineer
• Artificial Intelligence Engineer
• Cyber Security Engineer
• Game Development Engineer ⭐

Core / Evergreen:
• Computer Science Engineer
• Electronics & Communication Engineer
• Robotics & Automation Engineer

New-Age Fields:
• Cloud Computing Engineer
• IoT Engineer
• Web & App Development Engineer
goalStatement: Mujhe ye field pasand hai, isi me jaana hai
syllabusStyle: Core Foundation
Python basics
HTML/CSS
Data basics
Logical problem solving
syllabusModules: Career Rotation Modules:
• Software Development
• Data Science
• AI / ML
• Cyber Security
• Robotics
• Cloud & IoT

Career Mapping:
• Salary reality
• Required degrees
• Entrance exams
syllabusOutcome: Mujhe AI & Data Science chahiye
programId: [ID of Engineering program]
```

### Tier 3: Dream Achiever (Class 11-12)

```
tierName: ENGINEERING – DREAM ACHIEVER
tierLevel: Achiever
classRange: Class 11–12
objective: Professional + specialization + roadmap
roles: Top Trending:
• AI Engineer
• ML Engineer
• Data Scientist / Engineer
• Cyber Security Engineer
• Cloud & DevOps Engineer
• Robotics Engineer

Software Core:
• Software Development Engineer
• Full Stack Developer
• Mobile App Developer

Hardware / Core:
• Computer Science Engineer
• Electronics Engineer
• Embedded Systems Engineer

Future Tech (Awareness):
• Blockchain Engineer
• AR/VR Engineer
• Quantum Computing
goalStatement: Mera roadmap clear hai
syllabusStyle: Core Technical Base
Advanced programming
DSA basics
System thinking
syllabusModules: Specialization Tracks (Choose 1–2):
• AI / ML
• Cyber Security
• Full Stack / Software

Career Readiness:
• Portfolio & GitHub
• Internships awareness
• Resume + entrances
syllabusOutcome: Main industry ke liye ready ho raha hoon
programId: [ID of Engineering program]
```

## Step 3: Verify the Setup

1. Navigate to the Programs page and click on the Engineering program
2. You should see the three program tiers displayed with:
   - Tier name and class range
   - Objective
   - Roles/Career options
   - Goal statement
   - Syllabus breakdown (Style, Modules, Outcome)

## Notes

- The `programId` field must reference the actual ID of your Engineering program
- All text fields support multi-line content (use line breaks as shown above)
- The tiers will be displayed in the order they appear in the collection
- The UI uses icons to differentiate between tiers (Zap for Foundation, Award for Explorer, Briefcase for Achiever)
