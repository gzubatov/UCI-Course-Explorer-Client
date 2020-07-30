import { createContext } from 'react';

export const CourseContext = createContext({
	course    : null,
	courseId  : null,
	setCourse : () => {}
});
