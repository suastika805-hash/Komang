// SERVER COMPONENT
import Image from "next/image";
import { profile, stats } from "@/data/profile";

export default function AboutSection() {
  return (
    <section className="py-24 px-5 dark:bg-gray-950 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono text-accent tracking-widest mb-3">01 / ABOUT</p>
        <h2 className="text-4xl font-display font-bold dark:text-white text-gray-900 mb-10">
          Tentang Saya
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            {/* Photo — mobile: shown here, desktop: shown in right col */}
            <div className="flex items-center gap-5 mb-7 lg:hidden">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-accent/30">
                <Image src="/foto_saya.jpg" alt={profile.name} fill className="object-cover object-top" />
              </div>
              <div>
                <p className="font-display font-bold dark:text-white text-gray-900">{profile.name}</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">{profile.jurusan}</p>
              </div>
            </div>
            <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-6">
              {profile.bio}
            </p>
            <div className="space-y-2 dark:text-gray-400 text-gray-600 text-sm font-mono">
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>{profile.jurusan} · {profile.universitas}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>Angkatan {profile.angkatan}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>{profile.location}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent">▸</span>
                <span>{profile.email}</span>
              </div>
            </div>
          </div>

          {/* Photo + Stats */}
          <div className="space-y-5">
            {/* Photo — desktop only */}
            <div className="relative hidden lg:block w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-accent/20">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent/20 -z-10" />
              <Image
                src="/foto_saya.jpg"
                alt={profile.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl dark:bg-white/5 bg-gray-50 dark:border-white/5 border border-gray-200"
                >
                  <div className="text-3xl font-display font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm dark:text-gray-400 text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
