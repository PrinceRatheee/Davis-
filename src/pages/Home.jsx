import data from "../Data.json";
import About from "../components/About/About";
import Iconbox from "../components/Iconbox/Iconbox";
import Skill from "../components/Skill/Skill";
import Resume from "../components/Resume/ResumeSection";
import BlogSection from "../components/Blog/BlogSection";
import ReviewSection from "../components/Review/ReviewSection";
import Contact from "../components/Contact/Contact";
import PortfolioSection from "../components/Protfolio/PortfolioSection";
import Hero from "../components/Hero/Hero";
import { useContext } from "react";
import { StateContext } from "../context/StateContext";

const Home = () => {
  const {
    heroData,
    aboutData,
    serviceData,
    skillData,
    portfolioData,
    blogData,
    resumeData,
    reviewData,
    contactData,
    socialData,
  } = data;
  const { user } = useContext(StateContext);
  console.log(contactData,"socialData", socialData);
  const name = user?.about?.name;
  const words = name.split(" ");

  let formattedTitle = "";
  if (words.length > 1) {
    const lastName = words.pop();
    const capitalizedLastName =
      lastName.charAt(0).toUpperCase() + lastName.slice(1);
    formattedTitle =
      words.join(" ").replace(/\s/g, "<br>") + " " + capitalizedLastName;
  } else {
    formattedTitle = name.replace(/\s/g, "<br>");
  }

    const heroDataNew = {
      bgImgLink: heroData.homeOneHero?.bgImgLink,
      designation: user?.role,
      imgLink: user?.about?.avatar?.url,
      text: user?.about?.description,
      subTitle: "Hello, I’m",
      title: formattedTitle,
    };

  const newAboutData = {
    cvPdf: "/images/Resume.pdf",
    details: [
      { title: "Phone", info: user?.about?.phoneNumber },
      { title: "Email", info: user?.email },
      { title: "From", info: user?.about?.address },
      { title: "Language", info: "English, Germanic" },
      { title: "Freelance", info: "Available" },
      { title: "Freelance", info: "Available" },
    ],
    imgLink: user?.about?.avatar?.url,
    subtitle: user?.role,
    text: user?.about?.description,
    title: `Hi There! I'm ${user?.about?.name}`,
  };

  const services = [
    {
      delay: "200",
      duration: "500",
      effect: "zoom-out-up",
      imgLink: user?.services[0].image?.url,
      text: user?.services[0].desc,
      title: user?.services[0].name,
    },
    {
      delay: "300",
      duration: "500",
      effect: "zoom-out-up",
      imgLink: user?.services[1].image?.url,
      text: user?.services[1].desc,
      title: user?.services[1].name,
    },
    {
      delay: "400",
      duration: "500",
      effect: "zoom-out-up",
      imgLink: user?.services[2].image?.url,
      text: user?.services[2].desc,
      title: user?.services[2].name,
    },
    {
      delay: "500",
      duration: "500",
      effect: "zoom-out-up",
      imgLink: user?.services[3].image?.url,
      text: user?.services[3].desc,
      title: user?.services[3].name,
    },
    {
      delay: "600",
      duration: "500",
      effect: "zoom-out-up",
      imgLink: user?.services[4].image?.url,
      text: user?.services[4].desc,
      title: user?.services[4].name,
    },
    {
      delay: "700",
      duration: "500",
      effect: "zoom-out-up",
      imgLink: user?.services[5].image?.url,
      text: user?.services[5].desc,
      title: user?.services[5].name,
    },
  ];

  const newServiceData = {
    services,
  };
  const skills = user.skills
    .map((skill, index) => ({
      title: skill.name,
      progress: skill.percentage,
      effect: "fade-up",
      duration: 500,
      delay: 200 + index * 100,
    }))
    .slice(0, 6);

  const newSkillData = {
    skills,
    text: skillData.text,
    title: skillData.title,
  };

  const newResumeData = {
    education: resumeData.education,
    educationTitle: resumeData.educationTitle,
    experienceTitle: resumeData.experienceTitle,
    experience: user?.timeline?.map((work) => {
      const startDate = new Date(work.startDate);
      const endDate = new Date(work.endDate);
  
      const startMonth = startDate.toLocaleString('default', { month: 'short' });
      const startYear = startDate.getFullYear();
      const endMonth = endDate.toLocaleString('default', { month: 'short' });
      const endYear = endDate.getFullYear();
  
      const duration = `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  
      return {
        title: work.jobTitle,
        text: work.summary,
        subTitle: work.company_name,
        duration: duration,
      };
    }),
  };

 const portfolioItems=user.projects.map((project,index)=>({
    delay:200+(index*100),
    duration:500,
    effect:"fade-up",
    imgLink:project?.image?.url,
    imgLinkLg:project?.image?.url,
    subTitle:project.title,
    title:`${project.techStack[0]}/${project.techStack[1]}`
 }))

 const newPortfolioData={
  portfolioItems
 }
  
 const testimonials=user.testimonials.map((testimonial,index)=>({
  imgLink:testimonial.image.url,
  title:testimonial.name,
  text:testimonial.review,
  designation:testimonial.position
 }))
 const newReviewData={
  sliderSetting:reviewData.sliderSetting,
  useFor:reviewData.useFor,
  informations:testimonials
 }

 const newSocialData=user.social_handles.map((social)=>({
    icon:social?.image?.url,
    link:social?.url,
    title:social?.platform
 }))
  console.log("newSocialData", newSocialData);

  console.log(user);
  return (
    <>
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Hero data={heroDataNew} socialData={newSocialData} />
      <About data={newAboutData} data-aos="fade-right" />
      <Iconbox data={newServiceData} data-aos="fade-right" />
      <Skill data={newSkillData} data-aos="fade-right" />
      <Resume data={newResumeData} />
      <PortfolioSection data={newPortfolioData} data-aos="fade-right" />
      <ReviewSection data={newReviewData} data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact
        data={contactData}
        socialData={newSocialData}
        data-aos="fade-right"
      />
    </>
  );
};


export default Home;
