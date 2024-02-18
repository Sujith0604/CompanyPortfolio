import Card from "../UIComponents/Card";

export default function Services() {
  return (
    <section
      id="service"
      className="gap-10 sm:font-semibold  flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 rounded-[60px]"
    >
      <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px] md:leading-loose md:tracking-wider text-2xl md:text-4xl font-bold mt-10">
        SERVICE WE PROVIDE
      </h1>
      <div className=" flex items-center justify-center bg-blue-100 p-10 rounded-full m-2">
        <p className=" text-[15px] sm:text-[17px] md:text-xl md:font-thin md:leading-loose md:tracking-wider">
          We create responsive websites with fast loading time. We also provide
          services like redesigning and optimization of the websites
        </p>
      </div>
      <div className=" flex flex-wrap gap-10 items-center justify-center">
        <Card
          Head="Frontend Responsive Design"
          Text=" We create UI designs with ReactJs components for reusability. And also
                  create websites with fast loading times. Nowadays responsive design has become mandatory but people take it for granted. So we create the most attractive responsive designs for our customers."
          ImageUrl="images/responsive-design.png"
        />
        <Card
          Head="Animated UI Components Design"
          Text="Animations of the UI components are designed using Framer motions. Most of the websites in the browsers are not animated. Animating your website attracts more user interaction. Animation improves the UI more attractive and also viewable.  "
          ImageUrl="images/Animation.png"
        />
        <Card
          Head="Backend for websites"
          Text="We use Supabase and PostgreSQL for the backend. The superbase provides all the necessary API Calls for the CRUD operations and makes the backend easy for us. As it is SQL the data are well organised and connected."
          ImageUrl="images/supabase.webp"
        />
        <Card
          Head="Redesign and Optimization"
          Text="We provide services like redesigning the already existing one and also provide service for the optimization of the website and also some website strategy for the clients."
          ImageUrl="images/Solution.png"
        />
      </div>
    </section>
  );
}
