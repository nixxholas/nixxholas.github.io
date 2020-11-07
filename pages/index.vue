<template>
  <div>
    <header class="bg-white">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Hello, I'm Nicholas Chen!
        </h1>
        <p class="text-sm py-2">
          I'm an undergraduate student, software developer focusing on big data and fintech and enjoy creating things that make an impact to the world, small or big, be it a website, mobile app or anything in between. My goal is to build products that make everyone's daily life better.<br>
          <br>
          I graduated from 
          <a
            class="hover:underline text-red-700"
            href="https://sp.edu.sg"
          >
            Singapore Polytechnic
          </a> in 2018 with a Diploma in Information Technology and am currently undertaking an undergraduate programme since 2020. <br>
        </p>
      </div>
    </header>
    <hr>
    <!-- <UsefulData /> -->
    <!-- <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
        </div>
      </div>
    </main> -->
    <div class="px-8 py-2">
      <h2 class="text-xl font-bold leading-tight text-gray-900 py-4">
        Projects involved
      </h2>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 py-4">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img 
              class="rounded-sm md:w-20"
              src="~/assets/nozomi.png" 
              alt="Nozomi"
            >
          </div>
          <div class="mt-4 md:mt-0 md:ml-6">
            <a
              href="https://nozomi.ai"
              class="uppercase text-indigo-600 tracking-wide block mt-1 text-sm leading-tight font-semibold hover:underline"
            >
              Nozomi
            </a>
            <p class="mt-2 text-xs text-gray-600">
              A simple and easy web application that enables you to gather, process and utilise datasets.
            </p>
          </div>
        </div>
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img 
              class="rounded-sm md:w-20"
              src="~/assets/coinhako.png" 
              alt="Coinhako Logo"
            >
          </div>
          <div class="mt-4 md:mt-0 md:ml-6">
            <a
              href="https://coinhako.com"
              class="uppercase text-blue-600 tracking-wide block mt-1 text-sm leading-tight font-semibold hover:underline"
            >
              Coinhako
            </a>
            <p class="mt-2 text-xs text-gray-600">
              Southeast Asia's gateway to cryptocurrency.
            </p>
          </div>
        </div>
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img 
              class="rounded-sm md:w-20"
              src="~/assets/bukkit.png" 
              alt="Woman paying for a purchase"
            >
          </div>
          <div class="mt-4 md:mt-0 md:ml-6">
            <a
              href="https://getbukkit.org"
              class="uppercase text-green-600 tracking-wide block mt-1 text-sm leading-tight font-semibold hover:underline"
            >
              Bukkit
            </a>
            <p class="mt-2 text-xs text-gray-600">
              An extended version of the original Minecraft Server software that enables users to create Minecraft servers that enable extensive features and controls.
            </p>
          </div>
        </div>
        <div class="md:flex focus:shadow-2xl">
          <div class="md:flex-shrink-0">
            <img 
              class="rounded-sm md:w-20"
              src="~/assets/xda.jpg" 
              alt="Woman paying for a purchase"
            >
          </div>
          <div class="mt-4 md:mt-0 md:ml-6">
            <a
              href="https://www.xda-developers.com/"
              class="uppercase text-brown-600 tracking-wide block mt-1 text-sm leading-tight font-semibold hover:underline"
            >
              XDA
            </a>
            <p class="mt-2 text-xs text-gray-600">
              An extended version of the original Minecraft Server software that enables users to create Minecraft servers that enable extensive features and controls.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AppLogo from '~/components/AppLogo';
// import UsefulData from '~/components/UsefulData';

export default {
  components: {
    // AppLogo,
    // UsefulData,
  },
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
