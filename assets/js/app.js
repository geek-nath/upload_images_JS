// upload profile pic
let profilePic = document.querySelector('#profilePic');
let inputFile = document.querySelector('#inputFile');

// function that handles the upload of image
inputFile.onchange = () => {
  profilePic.innerHTML = `
    <img src="${URL.createObjectURL(inputFile.files[0])}" width="100%" alt="profile image" />
  `;
}