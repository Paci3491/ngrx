export interface Course {
  id: number;
  courseName: string;
}

export const getCourses = (): Course[] => {
  return [
    { id: 1, courseName: 'Awesome Course' },
    { id: 2, courseName: 'Brudi Course' },
  ];
};
