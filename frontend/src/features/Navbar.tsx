import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    //motion is a object api which has animatable components like nav.
    <motion.nav
      //initial position in the canvas and its visibilty
      initial={{ y: -100, opacity: 0 }}
      //where should it land and its visibility .
      animate={{ y: 0, opacity: 1 }}
      //duration is time taken to land , easeOut for fast coming and then slow down to finish
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/50 backdrop-blur-xl"
    >
      {/* Inner container with centered width and mobile responsive padding for left and right with flex for laying out the buttons */}
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/*The Logo */}
        <motion.div
          // while hovering it should zoom in
          whileHover={{ scale: 1.05 }}
          // while tapping it should pop
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Dev
        </motion.div>

        {/* BRICK 2: THE DESKTOP LINKS */}
        {/* 'hidden md:flex' means: Invisible on Phone, Flexbox on Laptop/Monitor */}
        <div className="hidden md:flex gap-8">
          {[
            //href for blog as we need to move to seperate page
            //id for jump links
            { label: "Projects", id: "projects" },
            { label: "Blog", href: "/blog" },
            { label: "Experience", id: "experience" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href || `#${item.id}`}
                // 1. #047857 is the "Emerald Green" from your reference
                // 2. #052e16 is the "Forest Black" from your reference
                className="text-[#047857] hover:text-[#052e16] transition-colors font-medium text-base"
              >
                {item.label}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            className="rounded-md bg-[#16a34a] hover:bg-[#16a34a]/90 px-4 py-2 text-sm font-medium text-white transition-colors duration-200
shadow-sm shadow-green-500/10"
          >
            Admin Login
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
