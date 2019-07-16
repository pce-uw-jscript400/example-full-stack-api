# Full Stack API

Today we are going to build a full-stack API from scratch.

## Description

We will be building an API that can manage evening courses, participants, and faculty at UW. That means we should be able to:

- Create new courses
- Create and assign students to a course
- Create and assign faculty to a course

### Data & Fields

We will want to be able to capture the following information:

#### Courses

- Name of the course
- Start Date for the course
- End Date for the course
- Location including building address and room number

#### Students

- First and last name
- Preferred name or nickname
- Email address

#### Faculty

- First and last name
- Preferred name or nickname
- Email address
- Role

## Features

In addition to basic CRUD operations, we will also want to be able to:

- Provide an endpoint for a course that returns a random student to call on during class
- Provide an endpoint that will mark attendance for a student for a specified date