<template>
    <div class="main">
        <div @click="toggleOnOff()" :class="[switchToggle ? 'toggleOn' : '', 'toggleBackground']">
            <div @click.stop="toggleOnOff()" :class="[switchToggle ? 'toggleButtonOn' : '', 'toggleButton']"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Toggle",
    data() {
        return {
            switchToggle: false,
        };
    },
    methods: {
        toggleOnOff() {
            this.switchToggle = !this.switchToggle;
            this.$emit('toggle')
        },
    },
};
</script>
<style scoped>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
}
.toggleBackground {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    background-color: #D1D5DB;
    height: 45px;
    width: 85px;
    border-radius: 40px;
    cursor: pointer;
}
.toggleOn {
    background-color: #3db158;
    justify-content: flex-end;
}
.toggleButton {
    background-color: #fff;
    display: flex;
    height: 35px;
    width: 40px;
    border-radius: 40px;
    margin: 5px;
}
.toggleButtonOn {
    background-color: #fff;
}
</style>
