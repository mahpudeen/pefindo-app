<template>
    <div class="q-pa-md jarak">
        <div style="height:40px"/>

        <div class="row items-center">
            <div class="col-2"> <div class="text-h5 text-bold">Scoring Engine</div> </div>
            <div class="col-1 q-gutter-xl"/>
            <div class="col-1 q-gutter-xl"><q-icon size="20px" name="home" color="secondary"/></div>
            <div class="col-1 q-gutter-xl"> <div class="text-body1 text-bold text-secondary">-</div> </div>
            <div class="col-2"> <div class=" text-left text-subtitle text-bold text-secondary">Secondary Engine</div> </div>
            <div class="col-1 q-gutter-xl"> <div class="text-body1 text-bold text-secondary">-</div> </div>
            <div class="col-2 q-gutter-lg"> <div class="text-subtitle2 text-bold text-negative">E-Commerce</div> </div>
        </div>

        <div style="height:23px"/>
        
        <q-card>
            <div class="row justify-center">
                <div class="col q-gutter-xl"/>
                <div class="col-11">
                    <div class="column">
                        <div style="height:10px"/>
                        <div class="col-1">
                            <div class="text-h6 text-secondary text-bold">Pencarian Tradisional (E-Commerce)</div>
                        </div>
                        
                        <div style="height:10px"/>
                        
                        <div class="col-1 justify-center">
                            <q-separator color="negative" />
                        </div>
                        
                        <div style="height:30px"/>

                        <q-tabs v-model="tab" dense class="text-grey-7" active-color="secondary"
                        indicator-color="secondary" align="justify">
                            <q-tab name="single" label="Single Inquiry"/>
                            <q-tab name="bulk" label="Bulk Inquiries" />
                        </q-tabs>                        

                        <div style="height:20px"/>
                        
                        <div class="col-1">
                        <q-tab-panels v-model="tab" animated class="text-white">
                            <q-tab-panel name="single">
                            <div class="row">
                                
                                <div class="col">
                                    <q-input outlined v-model="text" label="Phone Number" />
                                </div>
                                <div class="col-1 q-gutter-xl"/>
                                <div class="col">
                                    <q-input outlined v-model="text" label="Full Name" />
                                </div>
                                
                            </div>
                            </q-tab-panel>

                            <q-tab-panel name="bulk">
                            <div class="row">
                                
                                <div class="col">
                                    <q-input outlined v-model="text" label="Choose File" />
                                </div>
                                <div class="col-1">
                                    <q-btn style="height:55px" outline color="negative" label="Browse"/>
                                </div>
                                
                            </div>
                            </q-tab-panel>

                        </q-tab-panels>
                        </div>
                        
                        <div style="height:25px"/>

                        <div class="col-1 flex flex-center">
                            <div class="q-gutter-md">
                                <q-btn color="secondary" text-color="white" label="Create"/>
                                <q-btn color="white" text-color="black" label="Cancel"/>
                            </div>
                        </div>

                        
                        <div style="height:25px"/>

                    </div>
                </div>
                <div class="col q-gutter-xl"/>
            </div>
        </q-card>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            tab: 'single'
        }
    }
    
}
</script>

<style lang="sass" scoped>


.jarak
    margin-left: 2.5%
    margin-right: 2.5%
</style>