<template>
            <Toggle @toggle="nightModeOnOff()" class="toggleOnOff"></Toggle>
    <div :class="[toggleOnOff ? 'toggleOn' : '', 'main']">
        
        <div class="SearchBar">
            <i :class="[toggleOnOff ? 'changeColor':'','fas fa-search searchIcon']"></i>
            <input v-model="search" type="text" placeholder="Search Color Code" />
        </div>
        <div class="searchNoFound" v-if="arrayFilter.length <= 0">
            <span>No result found</span>
        </div>
        <div class="listMain">
            <div class="list" v-for="data in arrayFilter" :key="data.id">
                <div class="colorbox" :style="{ backgroundColor: `${data.colorCode}` }"></div>
                <span class="colorCode" @click="copyColorCode(data.colorCode)">{{ data.colorCode }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import Toggle from "../components/Toggle.vue";
export default {
    name: "Color",
    components: {
        Toggle,
    },
    data() {
        return {
            color: [
                { id: 1, name: "Gray", colorCode: "#F9FAFB" },
                { id: 2, name: "Gray", colorCode: "#F3F4F6" },
                { id: 3, name: "Gray", colorCode: "#E5E7EB" },
                { id: 4, name: "Gray", colorCode: "#D1D5DB" },
                { id: 5, name: "Gray", colorCode: "#9CA3AF" },
                { id: 6, name: "Gray", colorCode: "#6B7280" },
                { id: 7, name: "Gray", colorCode: "#4B5563" },
                { id: 8, name: "Gray", colorCode: "#374151" },
                { id: 9, name: "Gray", colorCode: "#1F2937" },
                { id: 10, name: "Gray", colorCode: "#111827" },
                { id: 11, name: "Red", colorCode: "#FEF2F2" },
                { id: 12, name: "Red", colorCode: "#FEE2E2" },
                { id: 13, name: "Red", colorCode: "#FECACA" },
                { id: 14, name: "Red", colorCode: "#FCA5A5" },
                { id: 15, name: "Red", colorCode: "#F87171" },
                { id: 16, name: "Red", colorCode: "#EF4444" },
                { id: 17, name: "Red", colorCode: "#DC2626" },
                { id: 18, name: "Red", colorCode: "#B91C1C" },
                { id: 19, name: "Red", colorCode: "#991B1B" },
                { id: 20, name: "Red", colorCode: "#7F1D1D" },
                { id: 21, name: "Yellow", colorCode: "#FFFBEB" },
                { id: 22, name: "Yellow", colorCode: "#FEF3C7" },
                { id: 23, name: "Yellow", colorCode: "#FDE68A" },
                { id: 24, name: "Yellow", colorCode: "#FCD34D" },
                { id: 25, name: "Yellow", colorCode: "#FBBF24" },
                { id: 26, name: "Yellow", colorCode: "#F59E0B" },
                { id: 27, name: "Yellow", colorCode: "#D97706" },
                { id: 28, name: "Yellow", colorCode: "#B45309" },
                { id: 29, name: "Yellow", colorCode: "#92400E" },
                { id: 30, name: "Yellow", colorCode: "#78350F" },
                { id: 31, name: "Green", colorCode: "#ECFDF5" },
                { id: 32, name: "Green", colorCode: "#D1FAE5" },
                { id: 33, name: "Green", colorCode: "#A7F3D0" },
                { id: 34, name: "Green", colorCode: "#6EE7B7" },
                { id: 35, name: "Green", colorCode: "#34D399" },
                { id: 36, name: "Green", colorCode: "#10B981" },
                { id: 37, name: "Green", colorCode: "#059669" },
                { id: 38, name: "Green", colorCode: "#047857" },
                { id: 39, name: "Green", colorCode: "#065F46" },
                { id: 40, name: "Green", colorCode: "#064E3B" },
                { id: 41, name: "Blue", colorCode: "#EFF6FF" },
                { id: 42, name: "Blue", colorCode: "#DBEAFE" },
                { id: 43, name: "Blue", colorCode: "#BFDBFE" },
                { id: 44, name: "Blue", colorCode: "#93C5FD" },
                { id: 45, name: "Blue", colorCode: "#60A5FA" },
                { id: 46, name: "Blue", colorCode: "#3B82F6" },
                { id: 47, name: "Blue", colorCode: "#2563EB" },
                { id: 48, name: "Blue", colorCode: "#1D4ED8" },
                { id: 49, name: "Blue", colorCode: "#1E40AF" },
                { id: 50, name: "Blue", colorCode: "#1E3A8A" },
                { id: 51, name: "Indigo", colorCode: "#EEF2FF" },
                { id: 52, name: "Indigo", colorCode: "#E0E7FF" },
                { id: 53, name: "Indigo", colorCode: "#C7D2FE" },
                { id: 54, name: "Indigo", colorCode: "#A5B4FC" },
                { id: 55, name: "Indigo", colorCode: "#818CF8" },
                { id: 56, name: "Indigo", colorCode: "#6366F1" },
                { id: 57, name: "Indigo", colorCode: "#4F46E5" },
                { id: 58, name: "Indigo", colorCode: "#4338CA" },
                { id: 59, name: "Indigo", colorCode: "#3730A3" },
                { id: 60, name: "Indigo", colorCode: "#312E81" },
                { id: 61, name: "Purple", colorCode: "#F5F3FF" },
                { id: 62, name: "Purple", colorCode: "#EDE9FE" },
                { id: 63, name: "Purple", colorCode: "#DDD6FE" },
                { id: 64, name: "Purple", colorCode: "#C4B5FD" },
                { id: 65, name: "Purple", colorCode: "#A78BFA" },
                { id: 66, name: "Purple", colorCode: "#8B5CF6" },
                { id: 67, name: "Purple", colorCode: "#7C3AED" },
                { id: 68, name: "Purple", colorCode: "#6D28D9" },
                { id: 69, name: "Purple", colorCode: "#5B21B6" },
                { id: 70, name: "Purple", colorCode: "#4C1D95" },
                { id: 71, name: "Pink", colorCode: "#FDF2F8" },
                { id: 72, name: "Pink", colorCode: "#FCE7F3" },
                { id: 73, name: "Pink", colorCode: "#FBCFE8" },
                { id: 74, name: "Pink", colorCode: "#F9A8D4" },
                { id: 75, name: "Pink", colorCode: "#F472B6" },
                { id: 76, name: "Pink", colorCode: "#EC4899" },
                { id: 77, name: "Pink", colorCode: "#DB2777" },
                { id: 78, name: "Pink", colorCode: "#BE185D" },
                { id: 79, name: "Pink", colorCode: "#9D174D" },
                { id: 80, name: "Pink", colorCode: "#831843" },
            ],
            search: "",
            toggleOnOff: false,
        };
    },
    methods: {
        copyColorCode(value) {
            console.log(value);
        },
        nightModeOnOff() {
            this.toggleOnOff = !this.toggleOnOff;
            console.log("hello");
        },
    },
    computed: {
        arrayFilter() {
            return this.color.filter((data) => data.name.toUpperCase().includes(this.search.toUpperCase()));
        },
    },
};
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    color: black;
    background-color: #ffff;
    font-weight: 550;
}
.toggleOn {
    background-color: black;
    color: #ffff;
}

.listMain {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 70%;
}
.list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}
.SearchBar {
    position: relative;
    border-bottom: 4px solid rgb(245, 240, 240);
    width: 70%;
    margin-top: 50px;
    margin-bottom: 20px;
}
input {
    width: 500px;
    height: 35px;
    outline: none;
    padding-left: 45px;
    margin-bottom: 40px;
    border: 2px solid rgb(226, 223, 223);
}
.searchIcon {
    font-size: 20px;
    position: absolute;
    top: 11px;
    left: 240px;
    color:black;
}
.changeColor{
    color: red;
}
.colorbox {
    height: 60px;
    width: 150px;
    border-radius: 10px;
    margin-top: 5px;
}
.colorCode {
    margin-top: 10px;
    cursor: pointer;
    width: 53%;
    height: 20px;
}
.searchNoFound {
    margin-top: 50px;
    margin-bottom: 50px;
}
.toggleOnOff {
    position: absolute;
    top: 100px;
    left: 170px;
    height: 0px;
    width: 0px;
}
</style>
