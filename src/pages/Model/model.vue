<template>
    <div class="q-pa-md jarak">
        <div style="height:40px"/>

        <div class="row items-center">
            <div class="col-1 q-gutter-lg"> <div class="text-h5 text-bold">Model</div> </div>
            <div class="col-1 q-gutter-xl"/>
            <div class="col-1 q-gutter-xl"> <q-icon size="20px" name="home" color="secondary"/></div>
            <div class="col-1 q-gutter-xl"> <div class="text-body1 text-bold text-secondary">-</div> </div>
            <div class="col-2 q-gutter-lg"> <div class="text-subtitle text-bold text-secondary">Model</div> </div>
            <div class="col-6 q-gutter-lg"/>
            <div class="col"> 
                <q-btn  unelevated rounded color="secondary" 
                label="Input New Model" icon="add_circle_outline" 
                @click="$router.replace('input_new_model')"/>
                </div>
            
        </div>
        
        <div style="height:23px"/>

        <div class="row justify-center">
        
        <div class="col-4 q-gutter-lg">
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
                            <q-btn size="10px" color="deep-purple-6" text-color="white" label="Tradisional"/>
                            <q-btn size="10px" color="orange-10" text-color="white" label="AI"/>
                            <q-btn size="10px" color="cyan-6" text-color="white" label="BRE"/>
                        </div>
                    </div>
                    <div style="height:15px"/>
                </div>
            </q-card>
        </div>

        <div style="width:10px"/>

        <div class="col-4 q-gutter-lg">
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
                            <q-btn size="10px" color="deep-purple-6" text-color="white" label="Tradisional"/>
                            <q-btn size="10px" color="orange-10" text-color="white" label="AI"/>
                            <q-btn size="10px" color="cyan-6" text-color="white" label="BRE"/>
                        </div>
                    </div>
                    <div style="height:15px"/>
                </div>
            </q-card>
        </div>

        <div style="width:10px"/>

        <div class="col-4 q-gutter-lg">
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
                            <q-btn size="10px" color="deep-purple-6" text-color="white" label="Tradisional"/>
                            <q-btn size="10px" color="orange-10" text-color="white" label="AI"/>
                            <q-btn size="10px" color="cyan-6" text-color="white" label="BRE"/>
                        </div>
                    </div>
                    <div style="height:15px"/>
                </div>
            </q-card>
        </div>
        
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
</style>