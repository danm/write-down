import React from 'react';
import { File, Subject } from '../../Types/markdownJSON';
import { NavButton, Link } from './style';
import sanitize from '../../helpers/sanitize';

export default function ({ direction, subject, file }:
{ direction: string, subject: Subject, file: File }) {
  let title: string;

  if (direction === 'next' && file.next && file.next.dir !== null && file.next.dir === subject.index) {
    title = file.next.title;
  } else if (direction === 'previous' && file.previous && file.previous.dir === subject.index) {
    title = file.previous.title;
  } else {
    return (<></>);
  }

  return (
    <Link href={sanitize(title)}>
      <NavButton text={title}>
        { direction === 'next' && 'next arrow icon' }
        <div className="large">
          <div className="title">
            {direction.toUpperCase()}
            article
          </div>
          <div className="text">{title}</div>
        </div>
        { direction === 'previous' && 'previous arrow icon' }
      </NavButton>
    </Link>
  );
}
