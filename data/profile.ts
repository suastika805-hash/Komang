export type Skill = {
  name: string;
  level: number;
  category: string;
};

export const profile = {
  name: "I Komang Swastika Adnyana",
  nickname: "Swastika",
  nim: "2401020075",
  jurusan: "Informatika",
  universitas: "Primakara",
  angkatan: "2024",
  bio: "Mahasiswa Informatika yang antusias dalam belajar pengembangan web modern. Suka membangun antarmuka yang bersih, cepat, dan mudah digunakan. Sedang mendalami Next.js, TypeScript, dan ekosistem web modern.",
  email: "suastika805@gmail.com",
  github: "https://github.com/suastika805-hash",
  location: "Lunyuk, Sumbawa, Nusa Tenggara Barat, Indonesia",
  available: true,
};

export const skills: Skill[] = [
  { name: "HTML & CSS", level: 65, category: "Frontend" },
  { name: "JavaScript", level: 66, category: "Frontend" },
  { name: "TypeScript", level: 60, category: "Frontend" },
  { name: "React.js", level: 70, category: "Frontend" },
  { name: "Next.js", level: 65, category: "Frontend" },
  { name: "Tailwind CSS", level: 70, category: "Frontend" },
  { name: "PHP", level: 70, category: "Backend" },
  { name: "MySQL", level: 65, category: "Backend" },
  { name: "Node.js", level: 50, category: "Backend" },
  { name: "Git & GitHub", level: 75, category: "Tools" },
  { name: "Figma", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
];

export const skillCategories = ["Frontend", "Backend", "Tools"];

export const stats = [
  { label: "Masih Prototype", value: "4+" },
  { label: "Teknologi", value: "10+" },
  { label: "Tahun Belajar", value: "1+" },
  { label: "Komitmen", value: "80%" },
];
