// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------


// input.setAttribute("type", "text");
// input.setAttribute("placeholder", "First Name");
// input.setAttribute("id", "user-first-name");
//
// input.setAttribute("type", "text");
// input.setAttribute("placeholder", "Last Name");
// input.setAttribute("id", "user-last-name");
//
// input.setAttribute("type", "email");
// input.setAttribute("placeholder", "Email");
// input.setAttribute("id","user-email");
//
// input.setAttribute("type", "text");
// input.setAttribute("placeholder", "Current Website");
// input.setAttribute("id", "user-website");
//
// input.setAttribute("type", "select");
// input.setAttribute("placeholder", "Select Language");
// input.setAttribute("id", "user-language");
//
// input.setAttribute("type", "textarea");
// input.setAttribute("placeholder", "Your Comment");
// input.setAttribute("id", "user-comment");
//
// input.setAttribute("type", "tel");
// input.setAttribute("placeholder", "Mobile Number");
// input.setAttribute("id", "user-mobile");
//
// input.setAttribute("type", "tel");
// input.setAttribute("placeholder", "Home Phone");
// input.setAttribute("id", "user-phone");
//
// container.appendChild(input);

for (var i = 0; i < formData.length; i++) {
  let container = document.getElementById("fields");
  let input = document.createElement("input");
  console.log(formData[i].type);
  if (formData[i].options.length >= 0){
    input.setAttribute("type", "text")
    container.appendChild(input);
  } else {

  }
}


// if statement with a select tag
