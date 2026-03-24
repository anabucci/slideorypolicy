
const DeletePage = () => {
const section = [
   
  {
    title: "Steps",

    content: `To delete your account, click on the settings icon on your profile page.\n\nThen, click on the "delete account" button. \n\nA pop up will show asking you to confirm. To proceed, click on "Delete Account"`
  },
  {
    title: "Your Data",
    content: "Your data is immediately deleted upon an account deletion request.\n\nThe following data is deleted:\n\nAll of your created stories (including all options, slides, comments, likes, and completion history).\n\nYour personal account information (user ID, email, and username).\n\nAll of your comments\n\nAll of your likes\n\nYour story completion history\n\nAny records of your blocked users"
//     [
//     {
//    title: "Creating Stories",
//    content: 'To create a story in Slideory:\n\nEach story option can be either text or an image.\n\nBasic Editor: Allows you to create stories with linear options. Selecting an option will lead to a specific next slide (e.g., Slide 1A or Slide 2).\n\nAdvanced Editor: Enables branching stories, where each option can lead to any slide in the story, allowing for multiple possible paths and outcomes.'
//     },
//      {
//    title: "Publishing your story",
//    content: "When you're done with your story, click on the \"Finish\" button. This will take you to the publish page. There, you can add a cover image, up to five hashtags, and a cover image. You can also enable the lives feature for your story. To preview your story, click on the eye icon. To save a draft, click on the text document button."
//     },
//     {
//    title: "Playing Stories",
//    content: 'Click on a story to start it. If you are on a option slide, as indicated by there being options on the slide, you must select an option to continue. If not, swipe to continue.'
//     },
//      {
//    title: "Personalizing your profile",
//    content: 'Click on the edit button to customize your profile. There, you can edit your profile picture and banner. You can also add a bio! To change the color scheme of your profile, select a color under the "theme" section.'
//     },
// ]
  },
 
];
return (
    <div className=" min-h-screen p-20 flex flex-col bg-gradient-to-b from-pink-200 to-white">
  <h1 className=" font-poppins font-bold text-6xl text-black">Delete Account</h1>
 

                                               {section.map((e: any) => {
                                            return   <div className="flex flex-col mt-10">
                                               {                 
                                             
                                               <div>                         
                                                   <p className="font-poppins text-black text-4xl font-bold">{e.title}</p>
                                              <p className={`font-poppins text-black text-lg mt-5 whitespace-pre-line `}>{e.content}</p>
                                                
                                            
                                                </div>
                                               }
                                               
                                                 </div>                 
                                                }

                                                          

                                                                                
                                
)
}
</div>
)}

export default DeletePage;