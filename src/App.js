import { useEffect, useState } from 'react';
import './App.css';
import star from"./assests/star-solid.svg";
import arrow from "./assests/Vector (1).svg";
import heart from "./assests/heart-regular.svg";
import share from "./assests/share-solid.svg";
function App() {
  const [data, setData] = useState({});
  const {learners, course_duration, description, image_one, image_three, image_two,review_class, review_teacher,teacher_img, teacher_name, title } = data;
  useEffect(()=>{
    fetch("teacher.json")
    .then(res=> res.json())
    .then(data=> setData(data))
  },[])
  return (
    <div className="App container mx-auto lg:px-0 md:px-0 px-5 pt-10">
      <div>
       <div>
        <h2 className='pb-2 lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold lg:w-4/5 md:w-4/5  text-center md:text-left lg:text-left'>{title}</h2>
        <p className='text-lg course font-semibold lg:text-left md:text-left text-center'>{course_duration}</p>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 gap-4 pt-8 grid-cols-1'>
        <div>
          <p className='lg:text-lg font-medium pb-3 lg:text-left md:text-left text-center'>{description}</p>
          <div className='flex items-center lg:flex-row md:flex-row lg:justify-start md:justify-start justify-center pb-3 flex-col'>
            <div><img src={teacher_img} alt=""></img></div>
            <div><h3 className='teacher-name text-xl font-semibold ml-2'>{teacher_name}</h3></div>
          </div>
          <div>
            <div className='lg:flex lg:justify-start md:flex md:justify-start text-center'>
              <div className='pr-3'>
                <ul className='review-list-wrapper'>
                  <li><img className='w-4' src={star} alt=""></img></li>
                  <li><img className='w-4' src={star} alt=""></img></li>
                  <li><img className='w-4' src={star} alt=""></img></li>
                  <li><img className='w-4' src={star} alt=""></img></li>
                  <li><img className='w-4' src={star} alt=""></img></li>
                  <li><img className='w-4' src={star} alt=""></img></li>
                </ul>
              </div>
              <div>
                <p className='review'><span>{review_teacher}</span> total reviews for this teacher</p>
              </div>
            </div>
          </div>
          <div>
            <div className='lg:flex lg:justify-start md:flex md:justify-start text-center'>
              <div className='pr-3'>
                <ul className='review-list-wrapper'>
                  <li><img className='w-4' src={star} alt=""></img></li>
                  <li><img className='w-4' src={star} alt=""></img></li>
                  <li><img className='w-4' src={star} alt=""></img></li>
                  <li><img className='w-4' src={star} alt=""></img></li>
                  <li><img className='w-4' src={star} alt=""></img></li>
                  <li><img className='w-4' src={star} alt=""></img></li>
                </ul>
              </div>
              <div>
                <p className='review'><span>{review_class}</span> reviews for this class</p>
              </div>
            </div>
          </div>
          <p className='text-xl font-medium py-4 lg:text-left md:text-left text-center'><span>completed by {learners} learners</span> </p>
        <div className='pt-4 flex lg:flex-row md:flex-row flex-col'>
          <button className='btn rounded-full mr-3 shedule-btn'>see class schedule <img className='w-2 ml-1' src={arrow} alt=""></img></button>
          <button className='btn mr-3 fav-btn text-base'><img className='w-5 ' src={heart} alt=""></img> Save</button>
          <button className='btn mr-3 share-btn text-base'><img className='w-5 ' src={share} alt=""></img> Share</button>
        </div>
        </div>
        <div className='image-wrapper grid lg:grid-cols-2 grid-cols-1 content-center gap-5'>
            <div><img src={image_one} alt=""></img></div>
          <div>
            <img src={image_two} alt=""></img>
            <img className='pt-5' src={image_three} alt=""></img></div>
        </div>
      </div>
    </div>
  );
}

export default App;
