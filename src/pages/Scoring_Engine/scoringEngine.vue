<template>
    <div class="q-pa-md jarak">
        <div style="height:40px"/>

        <div class="row items-center">
            <div class="col-2"> <div class="text-h5 text-bold">Scoring Engine</div> </div>
            <div class="col-1 q-gutter-xl"/>
            <div class="col-1 q-gutter-xl"><q-icon size="20px" name="home" color="secondary"/></div>
            <div class="col-1 q-gutter-xl"> <div class="text-body1 text-bold text-secondary">-</div> </div>
            <div class="col-2"> <div class=" text-left text-subtitle text-bold text-secondary">Secondary Engine</div> </div>
            
        </div>
        
        <div style="height:15px"/>

        <div class="row justify-left">
        
        <div class="col-4 q-gutter-lg padding">
            <q-card>
                <div class="column items-center">
                    <div style="height:10px"/>
                    <div class="col-6">
                        <q-icon name="card_travel" size="90px" color="secondary"/>
                    </div>
                    <div style="height:15px"/>
                    <div class="col-1">
                        <div class="text-negative text-h7 text-bold">E-Commerce</div>
                    </div>
                    <div style="height:15px"/>
                    <div class="col-1">
                        <div class="q-gutter-sm">
                            <q-btn size="10px" color="deep-purple-6" text-color="white" label="Tradisional" @click="$router.replace('tradisional')"/>
                            <q-btn size="10px" color="orange-10" text-color="white" label="AI" @click="$router.replace('ai')"/>
                            <q-btn size="10px" color="cyan-6" text-color="white" label="BRE" @click="$router.replace('bre')"/>
                        </div>
                    </div>
                    <div style="height:15px"/>
                </div>
            </q-card>
        </div>

        <div style="width:15px"/>

        
       
        
        </div>
        

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.jarak
    margin-left: 3%

.padding
    padding: 15px 
</style>