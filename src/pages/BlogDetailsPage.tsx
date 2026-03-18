

const BlogDetailsPage = () => {
    const  section = {'Eligibility':"You must be at least 13 years old to use the Service. By using the Service, you represent and warrant that you meet this requirement.",
    'User Accounts':"To access certain features, you may need to create an account. You agree to: Provide accurate information, maintain the security of your account, and be responsible for all activity under your account. We reserve the right to suspend or terminate accounts that violate these Terms.",
 'User Content':'Our Service allows users to create and share content including: Stories, Photos, Comments and other media (“User Content”). You retain ownership of the content you create. However, by posting content on the Service, you grant Slideory a worldwide, non-exclusive, royalty-free license to: host, store, display, reproduce, distribute and promote your user content for the purpose of operating and improving the Service.',
'Content Responsibility': "You are solely responsible for the content you post. You agree not to post content that: \n •    Is illegal or promotes illegal activity\n •    Harasses, threatens, or abuses others\n •    Contains hate speech\n •    Is sexually explicit or exploitative\n •    Violates intellectual property rights\n •    Contains spam or malicious software\n •    Violates the privacy of others. \nWe reserve the right to remove or restrict content at our discretion.",
'Content Moderation':"To maintain a safe community, we may: Review content, remove content, restrict accounts, or suspend or terminate users However, we do not guarantee that all content will be monitored.",
'Reporting Violations':"Users may report content that violates these Terms. If you believe content violates these Terms or your rights, please contact: slideory@gmail.com",
'Intellectual Property':'All content and materials provided by Slideory, including: software, branding, design and logos are owned by Slideory and protected by intellectual property laws. You may not: Copy, modify, distribute, or reverse engineer any part of the Service without our permission',
'Copyright Policy (DMCA)':'If you believe that content on the Service infringes your copyright, you may submit a takedown request including: identification of the copyrighted work , identification of the infringing material, your contact information , and a statement of good faith belief. Requests should be sent to: slideory@gmail.com',
'Termination':"We may suspend or terminate your access to the Service if you: violate these terms, post harmful or illegal content, or abuse the platform. You may stop using the Service at any time.",
"Disclaimer of Warranties":"The Service is provided “as is” and “as available.” We do not guarantee that: the Service will always be available the Service will be error-free and that user content will be accurate or reliable",
'Limitation of Liability':'To the maximum extent permitted by law, Slideory shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.',
'Changes to These Terms':'We may update these Terms from time to time. When we do, we will update the Effective Date. Continued use of the Service after changes means you accept the updated terms.',
'Contact Information':'If you have any questions about the terms, contact us at slideory@gmail.com'









   };

return (
    <div className=" min-h-screen p-20 flex flex-col bg-gradient-to-b from-pink-200 to-white">
  <h1 className=" font-poppins font-bold text-6xl text-black">Terms of Service</h1>
  <p className="mt-7 font-poppins font-black text-xl">Effective Date: April 18th, 2026.<br/><br/>Welcome to Slideory (“we,” “our,” or “us”). These Terms of Service (“Terms”) govern your access to and use of the Slideory mobile application and related Services (the “Service”). By accessing or using the Service, you agree to be bound by these Terms
</p>
                                               {Object.keys(section).map((e: any) => {
                                            return   <div className="flex flex-col mt-10">
                                                <p className="font-poppins text-black text-xl font-bold">{e}</p>
                                                <p className="font-poppins text-black text-lg mt-5">{Object(section)[e]}</p>
                                                </div>
                                              
                                                          
})}
                                                                                
    </div>
)
}

export default BlogDetailsPage;