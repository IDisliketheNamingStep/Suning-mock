<template>
    <div class="conrainer">
      <div class="bottom_alert">
        <div class="line"><hr></div>
        <span :style="textStyle">{{bottomWarningStr}}</span>
        <div class="line"><hr></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Bottom_apart_line",
        props: {
            bottomWarningStr: {
                type:String,
                default() {
                    return '看了又看'
                }
            },
            textStyle: {
                type: String,
                default() {
                    return "color: #999999"
                }
            }
        }
    }
</script>

<style scoped>
  .bottom_alert {
    width: 375px;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
    position: relative;
  }
  .bottom_alert .line {
    flex: 1;
  }
  .bottom_alert span {
    display: inline-block;
    position: absolute;
    top: 13px;
    padding: 0 10px;
    background-color: rgb(242,242,242);
  }
  hr {
    border-bottom: 1px solid #999999;
  }

</style>
