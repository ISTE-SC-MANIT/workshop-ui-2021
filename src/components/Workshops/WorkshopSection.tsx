import { Container } from '@material-ui/core';
import React from 'react';
import Workshops from './Workshops';

const title1 = 'Android App Development';
const image1 = 'images/android.jpeg';
const tag1 = 'Workshop';
const date1 = 'September 09-10, 2023';
const about1 =
  "Over the past few years, the Tech world has revolutionized. Among various spheres, Android Application Development is evolving expeditiously and has a popularity that's increasing at a rate of knots. In this competitive world, hands-on learning opportunities are a dire need. And to quench the thirst for knowledge, here comes the Android App Development using Android Studio workshop, providing 100% hands-on & practical sessions under the guidance of a mentor having years of expertise.";
const description1 =
  "The workshop will cover various domains such as understanding practical concepts behind Frontend & Backend and making a practical code for login form by performing coding in XML & JAVA. You will also be able to create your Camera Application and Calculator app along with an understanding of the logic behind the Calculator App. Don't miss this one-of-its-kind workshop which comes with an attractive CV-ready project.";
const point1 = [
  // ' Pivotal concepts of Frontend and Backend.',
  ' Crucial topics of XML & Java to code a login form.',
  ' Build your Camera Application.',
  ' Learn to build logic and create your Calculator App.',
  ' Practical learning sessions to give you hands-on experience.',
];
const title2 = 'Machine Learning';
const image2 = 'images/ml.jpg';
const tag2 = 'Workshop';
const date2 = 'September 16-17, 2023';
const about2 =
  'Leaping towards an advanced future, ISTE SC MANIT brings to you the workshop on Machine learning. Beginning with the fundamentals of Python by performing various loops, functions, and attributes of Python this course condenses to a multitude of knowledge and provides you with a concise understanding of machine learning theory and application. You will be able to code your image-to-text conversion program as well as your chatbot by the conclusion of the workshop. So, all you young enquiring brains out there, sign up for this premium workshop and harness the power of data in novel ways by developing smart machine learning algorithms.';
const description2 =
  'Bill Gates believes that "A breakthrough in machine learning would be worth ten Microsoft”. Thus, there is no compelling reason to additionally portray the significance of machine learning in this Computer Aided world. Machine Learning has given us self-driving cars, intuitive speech recognition, and an incomprehensibly worked-on grasp of the human genome in the preceding decade. Machine learning is so normal nowadays that you likely use it countless times each day without acknowledging it. ';
const point2 = [
  'The logic behind Image Extraction',
  'Image to Text Converting Applications',
  // 'Making Chat Bots from scratch and comprehending its Real-life utility',
  'Making Chat Bots from scratch',
  'Thoroughly crafted Hands-on and practical sessions',
  // 'Basics of Python: Loops, Functions, Attributes',
];
const workshopSection = () => {
  return (
    <Container maxWidth='lg'>
      <section className='workshop-section'>
        <div className='title'>
          <h2>
            <span>Workshops</span>ISTE SC MANIT
          </h2>
        </div>
        <Workshops
          title={title1}
          image={image1}
          tag={tag1}
          date={date1}
          about={about1}
          description={description1}
          points={point1}
        />
        <Workshops
          title={title2}
          image={image2}
          tag={tag2}
          date={date2}
          about={about2}
          description={description2}
          points={point2}
        />
      </section>
    </Container>
  );
};

export default workshopSection;
