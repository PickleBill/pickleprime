
export interface VideoClip {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoSrc: string;
}

export const videoClipsData: VideoClip[] = [
  { 
    id: 1, 
    title: 'Match Point', 
    duration: '0:15', 
    thumbnail: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnAydWM0YnRuMHY0NjJqZW8zMXJkN2tzaHp2Y2R5dXp0cWxucjJnaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BGKHrjfTMZX4g9y/giphy.gif',
    videoSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnAydWM0YnRuMHY0NjJqZW8zMXJkN2tzaHp2Y2R5dXp0cWxucjJnaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BGKHrjfTMZX4g9y/giphy.mp4'
  },
  { 
    id: 2, 
    title: 'First Set', 
    duration: '0:22', 
    thumbnail: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2JxeXd5ZDQ1bHV5MHJnY2tyNXYzMm5yMnhlZGl2cHlzMzlhc3dveCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdMk3uz9WSpdTvW/giphy.gif',
    videoSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2JxeXd5ZDQ1bHV5MHJnY2tyNXYzMm5yMnhlZGl2cHlzMzlhc3dveCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdMk3uz9WSpdTvW/giphy.mp4'
  },
  { 
    id: 3, 
    title: 'Best Rally', 
    duration: '0:18', 
    thumbnail: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGRleHc0bzZsaDQ2cW9kZWQxMjRzd3RrNWR2MzF2YjluNXM5c256YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xejDDiMP0RcljMs/giphy.gif',
    videoSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGRleHc0bzZsaDQ2cW9kZWQxMjRzd3RrNWR2MzF2YjluNXM5c256YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xejDDiMP0RcljMs/giphy.mp4'
  },
  { 
    id: 4, 
    title: 'Game Winning Shot', 
    duration: '0:12', 
    thumbnail: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHdjYWgwYXdqcXk3bmR1c3Q2bjdmeHNsMjJudnp1dDA3eXQxczBnOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlSOBBikMGcCzCM/giphy.gif',
    videoSrc: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHdjYWgwYXdqcXk3bmR1c3Q2bjdmeHNsMjJudnp1dDA3eXQxczBnOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlSOBBikMGcCzCM/giphy.mp4'
  }
];
