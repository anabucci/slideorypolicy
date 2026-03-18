
const AboutPage = () => {
const section = [
  {
    title: "Information We Collect",
    content: `We collect the following information when you use the Service: email address used to create and manage your account, username used to identify your account within the Service, photos or images that you upload or share through the Service, and activity data generated while using the Service such as likes, story completion history, comments, and other interactions within the Service.

Guest users are not required to provide personal information such as an email address or username. We do not collect data related to story completion or interactions with user-generated content, as guest users are not able to interact with such features. However, limited technical data (such as device type, operating system, Service version, and basic diagnostic or usage logs) may be automatically collected to ensure the Service functions properly.`
  },
  {
    title: "How We Collect Information",
    content: "Information is collected when you create an account, upload content, interact with stories, post comments, or otherwise use features of the Service. Activity data such as likes, story completion, and interactions is automatically recorded as part of normal Service functionality."
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to create and manage your account, display your username and uploaded photos within the Service, record interactions such as likes, comments, and story progress, send in-Service notifications related to Service activity, maintain the functionality and security of the platform, and improve the Service experience. Your data is not sold or shared with third parties for marketing purposes. We do not use your data for tracking across third-party apps or websites"
  },
  {
    title: "Data Retention and Deletion",
    content: "We retain your data only for as long as your account remains active. You may delete your account at any time through the Service's Settings page. When an account is deleted, the associated user data including account information, uploaded photos, comments, and activity data is permanently removed from our systems."
  },
  {
    title: "Data Storage and Security",
    content: "Your account information, uploaded photos, and activity data are stored securely using Supabase, our backend service provider. We use industry-standard security measures including encrypted data transmission (HTTPS) and secure storage practices provided by our backend service (Supabase)."
  },
  {
    title: "Third-Party Services",
    content: `We use Supabase as our backend service provider to store and manage user account information, uploaded content, and Service data. Supabase processes and stores data on our behalf solely to support the functionality of the Service.

Supabase may have access to personal data only as necessary to provide these services and is contractually obligated to protect your information and use it only for the purposes we specify.

For more information about how Supabase handles data, please review their Privacy Policy: https://supabase.com/privacy.

We do not sell, rent, or trade your personal information.

We only share data with trusted service providers (such as Supabase) strictly to operate and maintain the Service. These providers are contractually obligated to protect your data.`
  },
  {
    title: "Children and Age Restriction",
    content: "This Service is intended for users who are at least 13 years old. We do not knowingly allow individuals under the age of 13 to create accounts or use the Service."
  },
  {
    title: "Account and Data Requests",
    content: "Users may revoke consent for data storage by deleting their account through the Service's Settings page, which permanently removes their associated data. If you have questions about your account or the data associated with it, you may contact us using the email listed below. Users also have the right to request access, rectification, or deletion of their data when applicable by law."
  },
  {
    title: "Legal Compliance (GDPR & CCPA)",
    content: `We process your data based on your consent and as necessary to provide the Service’s functionality. If you are a resident of the European Union or California, you have additional rights under applicable privacy laws, including the right to access, correct, delete, or restrict the processing of your personal data, request a copy of your data in a portable format, and withdraw consent where applicable.

You can exercise these rights by contacting us at slideory@gmail.com or by deleting your account through the Service’s Settings page. Slideory is committed to complying with GDPR and CCPA requirements for the protection of your personal information.`
  },
  {
    title: "Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. If changes are made, the updated version will be posted in the Service with a revised effective date."
  },
  {
    title: "Contact Us",
    content: "If you have any questions about this Privacy Policy, contact us at: slideory@gmail.com"
  }
];
return (
    <div className=" min-h-screen p-20 flex flex-col bg-gradient-to-b from-pink-200 to-white">
  <h1 className=" font-poppins font-bold text-6xl text-black">Privacy Policy</h1>
  <p className="mt-10 font-poppins font-black text-xl">Effective Date: April 18th, 2026.<br/><br/>Slideory (“we”, “our”, or “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the Slideory mobile application and related services (the “Service”)
.
</p>
                                               {section.map((e: any) => {
                                            return   <div className="flex flex-col mt-10">
                                                <p className="font-poppins text-black text-xl font-bold">{e.title}</p>
                                                <p className="font-poppins text-black text-lg mt-5">{e.content}</p>
                                                </div>
                                              
                                                          
})}
                                                                                
    </div>
)
}

export default AboutPage;