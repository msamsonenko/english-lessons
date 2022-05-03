// import React, { Component } from 'react';
// import pictures from '../vocabulary/pictures/lesson-one/cat_img.jpg';
import { List, ListItem } from './LessonOne.styled';

export default function LessonOne({ words }) {
  return (
    <>
      <h1>Lesson 1 - Урок 1</h1>
      <List>
        {words.map(word => {
          const { id, name, img } = word;
          console.log(img);
          return (
            <ListItem key={id}>
              <p>
                {name.en} - {name.ua}
              </p>
              <img src={img} alt={name.en} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

// export default LessonOne;
