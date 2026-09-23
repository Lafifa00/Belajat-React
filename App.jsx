function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#home"
            className="text-xl font-bold tracking-wide"
          >
            Lafifa
            <span className="text-emerald-400">.dev</span>
          </a>


          {/* NAVIGATION */}
          <div className="hidden md:flex items-center gap-8 text-sm">

            <a
              href="#home"
              className="text-white hover:text-emerald-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-400 hover:text-emerald-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-gray-400 hover:text-emerald-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-400 hover:text-emerald-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="px-5 py-2 rounded-full border border-emerald-400/40 text-emerald-400 hover:bg-emerald-400 hover:text-black transition"
            >
              Contact
            </a>

          </div>

        </div>

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-24"
      >

        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,211,153,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.12) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>


        {/* GLOW */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"></div>


        <div className="relative max-w-7xl mx-auto px-6 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">


            {/* =================================================
                HERO LEFT
            ================================================= */}
            <div>

              {/* STATUS */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 text-emerald-400 text-sm mb-7">

                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>

                Currently learning & building

              </div>


              {/* SMALL TITLE */}
              <p className="text-emerald-400 font-mono text-sm tracking-[0.3em] mb-4">
                DIGITAL PORTFOLIO
              </p>


              {/* MAIN TITLE */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">

                Hi, I'm{" "}

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Lafifa
                </span>

                <br />

                <span className="text-gray-200">
                  Linta
                </span>

              </h1>


              {/* ROLE */}
              <h2 className="mt-6 text-xl md:text-2xl text-gray-400">

                Information Systems Student

                <span className="text-emerald-400">
                  {" "}·{" "}
                </span>

                Aspiring Data Analyst

              </h2>


              {/* DESCRIPTION */}
              <p className="mt-6 text-gray-400 leading-8 max-w-xl">

                I’m interested in turning data into meaningful
                information. Currently exploring data analysis,
                visualization, databases, and digital technology
                through academic and personal projects.

              </p>


              {/* BUTTON */}
              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="#projects"
                  className="group px-7 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
                >
                  Explore Projects

                  <span className="ml-2 group-hover:ml-3 transition-all">
                    →
                  </span>

                </a>


                <a
                  href="#about"
                  className="px-7 py-3 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition"
                >
                  About Me
                </a>

              </div>


              {/* SMALL INFORMATION */}
              <div className="flex gap-10 mt-12">

                <div>

                  <p className="text-2xl font-bold">
                    03+
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Projects
                  </p>

                </div>


                <div>

                  <p className="text-2xl font-bold">
                    05+
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Technologies
                  </p>

                </div>


                <div>

                  <p className="text-2xl font-bold text-emerald-400">
                    ∞
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Curiosity
                  </p>

                </div>

              </div>

            </div>



            {/* =================================================
                DIGITAL PROFILE CARD
            ================================================= */}
            <div className="relative">

              {/* SOFT GLOW */}
              <div className="absolute -inset-6 bg-emerald-500/10 blur-3xl rounded-full"></div>


              {/* PROFILE CARD */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0a1020]/90 backdrop-blur-xl overflow-hidden">


                {/* TOP BAR */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">

                  <div className="flex items-center gap-3">

                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>

                    <span className="text-xs text-gray-500 tracking-widest font-mono">
                      PROFILE
                    </span>

                  </div>


                  <span className="text-xs text-gray-600 font-mono">
                    01 / 01
                  </span>

                </div>



                {/* PROFILE CONTENT */}
                <div className="p-7 md:p-8">


                  {/* NAME */}
                  <div>

                    <p className="text-xs text-gray-500 tracking-[0.25em] font-mono">
                      DIGITAL PROFILE
                    </p>

                    <h3 className="text-3xl font-bold mt-3">
                      Lafifa Linta
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Information Systems Student
                    </p>

                  </div>



                  {/* DIVIDER */}
                  <div className="h-px bg-white/10 my-7"></div>



                  {/* INTEREST */}
                  <div>

                    <p className="text-xs text-emerald-400 tracking-[0.2em] font-mono mb-4">
                      INTEREST
                    </p>


                    <div className="space-y-3">


                      <div className="flex items-center gap-3">

                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>

                        <span className="text-gray-300">
                          Data Analysis
                        </span>

                      </div>


                      <div className="flex items-center gap-3">

                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>

                        <span className="text-gray-300">
                          Data Visualization
                        </span>

                      </div>


                      <div className="flex items-center gap-3">

                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>

                        <span className="text-gray-300">
                          Information Systems
                        </span>

                      </div>


                    </div>

                  </div>



                  {/* CURRENTLY EXPLORING */}
                  <div className="mt-8">

                    <p className="text-xs text-emerald-400 tracking-[0.2em] font-mono mb-4">
                      CURRENTLY EXPLORING
                    </p>


                    <div className="grid grid-cols-2 gap-3">


                      {/* SQL */}
                      <div className="px-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] hover:border-emerald-400/30 transition">

                        <p className="text-sm text-gray-300">
                          SQL
                        </p>

                        <p className="text-xs text-gray-600 mt-1">
                          Database
                        </p>

                      </div>


                      {/* POWER BI */}
                      <div className="px-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] hover:border-yellow-400/30 transition">

                        <p className="text-sm text-gray-300">
                          Power BI
                        </p>

                        <p className="text-xs text-gray-600 mt-1">
                          Visualization
                        </p>

                      </div>


                      {/* JAVASCRIPT */}
                      <div className="px-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] hover:border-yellow-300/30 transition">

                        <p className="text-sm text-gray-300">
                          JavaScript
                        </p>

                        <p className="text-xs text-gray-600 mt-1">
                          Web Development
                        </p>

                      </div>


                      {/* REACT */}
                      <div className="px-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] hover:border-teal-400/30 transition">

                        <p className="text-sm text-gray-300">
                          React
                        </p>

                        <p className="text-xs text-gray-600 mt-1">
                          Front-end
                        </p>

                      </div>


                    </div>

                  </div>



                  {/* STATUS */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">


                    <div>

                      <p className="text-xs text-gray-600 font-mono">
                        STATUS
                      </p>

                      <div className="flex items-center gap-2 mt-2">

                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

                        <span className="text-sm text-emerald-400">
                          Learning & Building
                        </span>

                      </div>

                    </div>


                    <div className="text-right">

                      <p className="text-xs text-gray-600 font-mono">
                        FIELD
                      </p>

                      <p className="text-sm text-gray-300 mt-2">
                        Technology & Data
                      </p>

                    </div>


                  </div>


                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section
        id="about"
        className="relative py-28 border-t border-white/5"
      >

        <div className="max-w-7xl mx-auto px-6">


          <p className="text-emerald-400 font-mono text-sm mb-3">
            !ABOUT ME!
          </p>


          <h2 className="text-4xl md:text-5xl font-bold">

            Understanding data

            <br />

            <span className="text-emerald-400">
              Building digital solutions.
            </span>

          </h2>


          <div className="max-w-3xl">

            <p className="mt-7 text-gray-400 leading-8">

              I’m an Information Systems student with an interest
              in data analysis and technology. I enjoy learning
              how data can be processed, visualized, and transformed
              into information that is easier to understand and use.

            </p>


            <p className="mt-4 text-gray-500 leading-8">

              Through academic and personal projects, I’m currently
              developing my skills in data processing, visualization,
              databases, and web development.

            </p>

          </div>



          {/* ABOUT CARDS */}
          <div className="grid md:grid-cols-3 gap-5 mt-14">


            {/* CARD 1 */}
            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-emerald-400/30 hover:-translate-y-1 transition">

              <div className="text-3xl mb-5 text-emerald-400">
                ◈
              </div>

              <h3 className="font-semibold text-lg">
                Curious
              </h3>

              <p className="text-gray-500 text-sm mt-3 leading-6">

                Senang mengeksplorasi hal baru dan memahami
                bagaimana teknologi bekerja.

              </p>

            </div>



            {/* CARD 2 */}
            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-teal-400/30 hover:-translate-y-1 transition">

              <div className="text-3xl mb-5 text-teal-400">
                ◉
              </div>

              <h3 className="font-semibold text-lg">
                Data Driven
              </h3>

              <p className="text-gray-500 text-sm mt-3 leading-6">

                Tertarik mengubah data menjadi informasi yang
                lebih mudah dipahami dan digunakan.

              </p>

            </div>



            {/* CARD 3 */}
            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-purple-400/30 hover:-translate-y-1 transition">

              <div className="text-3xl mb-5 text-purple-400">
                ◇
              </div>

              <h3 className="font-semibold text-lg">
                Always Learning
              </h3>

              <p className="text-gray-500 text-sm mt-3 leading-6">

                Terus mengembangkan kemampuan melalui project
                dan pengalaman baru.

              </p>

            </div>


          </div>

        </div>

      </section>



      {/* =====================================================
          SKILLS
      ===================================================== */}
      <section
        id="skills"
        className="py-28 bg-[#070c1b] border-y border-white/5"
      >

        <div className="max-w-7xl mx-auto px-6">


          <p className="text-emerald-400 font-mono text-sm mb-3">
            SKILLS
          </p>


          <h2 className="text-4xl font-bold">
            Tools & Technologies
          </h2>


          <p className="text-gray-500 mt-4 max-w-2xl">

            Technologies and tools I’m currently learning and
            using through academic and personal projects.

          </p>



          {/* SKILL GRID */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-12">


            {/* EXCEL */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-emerald-400/40 hover:-translate-y-1 transition">

              <p className="text-3xl text-emerald-400">
                ▦
              </p>

              <h3 className="font-semibold mt-4">
                Excel
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Data Processing
              </p>

            </div>



            {/* POWER BI */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-yellow-400/40 hover:-translate-y-1 transition">

              <p className="text-3xl text-yellow-400">
                ◒
              </p>

              <h3 className="font-semibold mt-4">
                Power BI
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Data Visualization
              </p>

            </div>



            {/* MYSQL */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-cyan-400/40 hover:-translate-y-1 transition">

              <p className="text-3xl text-cyan-400">
                ◈
              </p>

              <h3 className="font-semibold mt-4">
                MySQL
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Database & SQL
              </p>

            </div>



            {/* JAVASCRIPT */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-yellow-300/40 hover:-translate-y-1 transition">

              <p className="text-3xl text-yellow-300">
                JS
              </p>

              <h3 className="font-semibold mt-4">
                JavaScript
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Web Development
              </p>

            </div>



            {/* REACT */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-teal-400/40 hover:-translate-y-1 transition">

              <p className="text-3xl text-teal-400">
                ⚛
              </p>

              <h3 className="font-semibold mt-4">
                React
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Front-end
              </p>

            </div>


          </div>

        </div>

      </section>



      {/* =====================================================
          PROJECTS
      ===================================================== */}
      <section
        id="projects"
        className="py-28"
      >

        <div className="max-w-7xl mx-auto px-6">


          <p className="text-emerald-400 font-mono text-sm mb-3">
            SELECTED WORK
          </p>


          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>


          <p className="text-gray-500 mt-4 max-w-2xl">

            A selection of academic and personal projects
            I’ve worked on while developing my skills.

          </p>



          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">


            {/* PROJECT 1 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-emerald-400/40 hover:-translate-y-2 transition">


              <div className="h-44 bg-gradient-to-br from-emerald-500/20 to-teal-500/5 flex items-center justify-center">

                <span className="text-6xl text-emerald-400">
                  ◒
                </span>

              </div>


              <div className="p-6">

                <p className="text-xs text-emerald-400 font-mono">
                  PROJECT 01
                </p>


                <h3 className="text-xl font-semibold mt-3">
                  COVID-19 Data Visualization
                </h3>


                <p className="text-gray-500 text-sm mt-3 leading-6">

                  Interactive data visualization project using
                  Power BI to explore COVID-19 data and present
                  information through visual dashboards.

                </p>


                <div className="flex gap-2 mt-5">

                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400">
                    Power BI
                  </span>

                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400">
                    Data Analysis
                  </span>

                </div>

              </div>

            </div>



            {/* PROJECT 2 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-cyan-400/40 hover:-translate-y-2 transition">


              <div className="h-44 bg-gradient-to-br from-cyan-500/20 to-blue-500/5 flex items-center justify-center">

                <span className="text-6xl text-cyan-400">
                  ◈
                </span>

              </div>


              <div className="p-6">

                <p className="text-xs text-cyan-400 font-mono">
                  PROJECT 02
                </p>


                <h3 className="text-xl font-semibold mt-3">
                  Car Rental Database
                </h3>


                <p className="text-gray-500 text-sm mt-3 leading-6">

                  Database design project for managing rental
                  transactions, customers, employees, vehicles,
                  and related data using MySQL.

                </p>


                <div className="flex gap-2 mt-5">

                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                    MySQL
                  </span>

                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400">
                    Database
                  </span>

                </div>

              </div>

            </div>



            {/* PROJECT 3 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-purple-400/40 hover:-translate-y-2 transition">


              <div className="h-44 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/5 flex items-center justify-center">

                <span className="text-5xl text-purple-400">
                  {"</>"}
                </span>

              </div>


              <div className="p-6">

                <p className="text-xs text-purple-400 font-mono">
                  PROJECT 03
                </p>


                <h3 className="text-xl font-semibold mt-3">
                  Product Explorer
                </h3>


                <p className="text-gray-500 text-sm mt-3 leading-6">

                  React-based web application for displaying,
                  filtering, sorting, and managing product data
                  using JavaScript.

                </p>


                <div className="flex gap-2 mt-5">

                  <span className="text-xs px-3 py-1 rounded-full bg-purple-400/10 text-purple-400">
                    React
                  </span>

                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400">
                    JavaScript
                  </span>

                </div>

              </div>

            </div>


          </div>

        </div>

      </section>



      {/* =====================================================
          LEARNING JOURNEY
      ===================================================== */}
      <section
        className="py-28 bg-[#070c1b] border-y border-white/5"
      >

        <div className="max-w-7xl mx-auto px-6">


          <p className="text-emerald-400 font-mono text-sm mb-3">
            LEARNING JOURNEY
          </p>


          <h2 className="text-4xl font-bold">

            Currently learning.

            <span className="text-emerald-400">
              {" "}Constantly improving.
            </span>

          </h2>


          <p className="text-gray-500 mt-5 max-w-2xl leading-7">

            My portfolio reflects what I’m learning, building,
            and improving along the way.

          </p>



          {/* TIMELINE */}
          <div className="mt-14 border-l border-emerald-400/30 pl-8 space-y-10">


            {/* DATA */}
            <div className="relative">

              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/30"></div>

              <p className="text-emerald-400 font-mono text-sm">
                DATA
              </p>

              <h3 className="text-xl font-semibold mt-2">
                Data Processing & Analysis
              </h3>

              <p className="text-gray-500 mt-2">
                Exploring Excel and basic data analysis techniques.
              </p>

            </div>



            {/* DATABASE */}
            <div className="relative">

              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-teal-400"></div>

              <p className="text-teal-400 font-mono text-sm">
                DATABASE
              </p>

              <h3 className="text-xl font-semibold mt-2">
                SQL & Database
              </h3>

              <p className="text-gray-500 mt-2">

                Learning how structured data is stored,
                connected, and queried.

              </p>

            </div>



            {/* WEB */}
            <div className="relative">

              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-purple-400"></div>

              <p className="text-purple-400 font-mono text-sm">
                WEB
              </p>

              <h3 className="text-xl font-semibold mt-2">
                JavaScript & React
              </h3>

              <p className="text-gray-500 mt-2">

                Building interactive web interfaces and
                understanding modern front-end development.

              </p>

            </div>


          </div>

        </div>

      </section>



      {/* =====================================================
          CONTACT
      ===================================================== */}
      <section
        id="contact"
        className="py-32 relative overflow-hidden"
      >

        <div className="absolute inset-0 bg-emerald-500/[0.03]"></div>


        <div className="relative max-w-4xl mx-auto px-6 text-center">


          <p className="text-emerald-400 font-mono text-sm">
            LET'S CONNECT
          </p>


          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's connect.
          </h2>


          <p className="text-gray-500 mt-5 max-w-xl mx-auto leading-7">

            I’m open to learning opportunities, project
            collaborations, and conversations about technology
            and data.

          </p>


          <a
            href="mailto:your@email.com"
            className="inline-block mt-8 px-8 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
          >
            Get In Touch →
          </a>


        </div>

      </section>



      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-white/10 py-8">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-600">

          <p>
            © 2025 Lafifa Linta
          </p>

          <p className="font-mono">
            Built with React + Tailwind CSS
          </p>

        </div>

      </footer>


    </div>
  )
}

export default App