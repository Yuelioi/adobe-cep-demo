<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { os, path } from "../lib/cep/node";
import {
  csi,
  evalES,
  evalTS,
  openLinkInBrowser,
  subscribeBackgroundColor,
} from "../lib/utils/bolt";

import "../index.css";

const backgroundColor = ref("#282c34");
const count = ref(0);

const containerStyle = computed(() => ({
  backgroundColor: backgroundColor.value,
}));

// ExtendScript (string eval)
const jsxTest = () => {
  console.log(evalES(`helloWorld("${csi.getApplicationID()}")`));
};

// ExtendScript (typed)
const jsxTestTS = async () => {
  console.log(await evalTS("helloStr", "test"));
  console.log(await evalTS("helloNum", 1000));
  console.log(await evalTS("helloArrayStr", ["ddddd", "aaaaaa", "zzzzzzz"]));

  const res = await evalTS("helloObj", { height: 90, width: 100 });
  console.log(res, res.x, res.y);

  await evalTS("helloVoid");
};

// CEP Node
const nodeTest = () => {
  alert(
    `Node.js ${process.version}
Platform: ${os.platform}
Folder: ${path.basename(window.cep_node.global.__dirname)}`
  );
};

onMounted(() => {
  if (window.cep) {
    subscribeBackgroundColor((c: string) => {
      backgroundColor.value = c;
    });
  }
});
</script>
<template>
  <div
    class="flex items-center justify-center w-screen min-h-screen text-slate-100"
    :style="containerStyle">
    <div class="w-full max-w-md p-6 space-y-6">
      <!-- Header -->
      <header class="flex flex-col items-center space-y-4">
        <img src="../assets/bolt-cep.svg" class="w-16 h-16" alt="Bolt CEP" />

        <!-- Stack -->
        <div class="flex items-center gap-3 text-sm opacity-90">
          <div class="flex items-center gap-1">
            <img src="../assets/vite.svg" class="w-4 h-4" />
            Vite
          </div>
          +
          <div class="flex items-center gap-1">
            <img src="../assets/vue.svg" class="w-4 h-4" />
            Vue
          </div>
          +
          <div class="flex items-center gap-1">
            <img src="../assets/typescript.svg" class="w-4 h-4" />
            TS
          </div>
          +
          <div class="flex items-center gap-1">
            <img src="../assets/sass.svg" class="w-4 h-4" />
            Sass
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap justify-center gap-2">
          <button
            class="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600"
            @click="count++">
            Count: {{ count }}
          </button>

          <button
            class="px-2 py-1 rounded bg-slate-700 hover:bg-slate-600"
            @click="nodeTest">
            <img src="../assets/node-js.svg" class="w-4 h-4" />
          </button>

          <button
            class="px-2 py-1 rounded bg-slate-700 hover:bg-slate-600"
            @click="jsxTest">
            <img src="../assets/adobe.svg" class="w-4 h-4" />
          </button>

          <button
            class="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600"
            @click="jsxTestTS">
            TS
          </button>
        </div>

        <!-- Info -->
        <p class="text-xs opacity-70">
          Edit <code class="text-amber-400">main.vue</code> and save to test
          HMR.
        </p>

        <!-- Links -->
        <div class="flex gap-3 text-xs">
          <button
            class="text-red-400 hover:underline"
            @click="openLinkInBrowser('https://github.com/hyperbrew/bolt-cep')">
            Bolt Docs
          </button>

          <button
            class="text-green-400 hover:underline"
            @click="openLinkInBrowser('https://v3.vuejs.org/')">
            Vue Docs
          </button>

          <button
            class="text-yellow-400 hover:underline"
            @click="
              openLinkInBrowser('https://vitejs.dev/guide/features.html')
            ">
            Vite Docs
          </button>
        </div>
        <div class="font-bold text-red-500">tailwindcss3 is supported</div>
      </header>
    </div>
  </div>
</template>
