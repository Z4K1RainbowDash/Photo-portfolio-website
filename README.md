# Photo Portfolio Template 🖼️

Welcome to the Photo Portfolio Template! Crafted with Angular, this template offers photographers, artists, and visual creators a sleek platform to showcase their work.

## 🌠 Features 

- **Personal Introduction**: A space tailored for your profile photo and a brief bio or artist statement.
- **Interactive Gallery**: Projects are neatly arranged in a grid, with the ability to expand and view individual photos.

## 🚀 Setup & Run

1. **Clone the Repository**
```
git clone https://github.com/Z4K1RainbowDash/Photo-portfolio-website.git
```

2. **Move to Directory & Install Dependencies**
```
cd [Your Repository Directory]
npm install
```

3. **Start the Development Server**
```
ng serve
```
After executing the above, visit `http://localhost:4200/` in your browser.

## 🎨 Customization Guide

### Personal Bio Section
Locate `about.component.html`:
- Replace the profile image with your own.
- Edit the placeholder text to provide insights about yourself and your photographic journey.

### Photo Collections
Your photo collections should be structured and saved in `assets/projects.json`.

**Structure Your JSON Data**\
Use the following format:
```[
  {
    "mainImage": "assets/projects/YourCollectionName/main.webp",
    "title": "Your Collection Title",
    "images": [
      "assets/projects/YourCollectionName/1.webp",
      "assets/projects/YourCollectionName/2.webp",
      ...
    ]
  },
  ...
]
```
## 📦 Dependencies 

- Angular framework
- Angular Material components

## 💬 Connect 

Got feedback, issues, or suggestions? Please open an issue or put forth a pull request.

## 📄 License 

This template abides by the MIT License.