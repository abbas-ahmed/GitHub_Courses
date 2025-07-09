    
    const { createApp } = Vue;
            
            createApp({
                data() {
                    return {
                    maxviewWords :30 ,
                    currentIndex: 0,
                    list_tense :['past simple' , 'past continous' , 'past perfect', 'present simple' , 'present continous' , 'present perfect' , 'future simple', 'future continous' , 'future perfect'] , 
                    verbs:[] ,
                    verbid_:[] ,
                    verbEnglish_: [],
                    verbSentence_: [],
                    verbpath_: [],
                    verbRate_: [],
                    verbStat_: [],
                    verbType_: [],
                    verbname_: [],
                    verbNote_: [],
                    verbLangArabic_:[],
                    verbLangRusian_: [],
                    verbLangspanish_: [],
                    verbLangDeutsch_: [],
                    verbLangChain_: [] ,
                    
                    }   
                } , 
                 // end data 

                methods: {
                nextWord() {
                    if (this.currentIndex < this.maxviewWords - 1) {
                        this.currentIndex++;
                    } else {
                        // Loop back to the first word
                        this.currentIndex = 0;
                    }
                },
                prevWord() {
                    if (this.currentIndex > 0) {
                        this.currentIndex--;
                    } else {
                        // Go to the last word
                        this.currentIndex = this.maxviewWords - 1;
                    }
                },
            } ,
             // end Mothed 

                mounted() {
                // You could load words from localStorage here
                 fetch('http://127.0.0.1:8000/api/get_verb_by_Tense_Rante/?verbType=1?verbRate=1')
                .then(res => res.json())
                 .then(data => {
                    // this.oneverb = data['Verbs'][0]['id']; // return one verb 

                    this.verbs = data['Verbs'];
                    this.verbs.forEach(element => {
                             
                            this.verbid_.push(element.id) ,
                            this.verbEnglish_.push(element.verbEnglish),
                            this.verbSentence_.push(element.verbSentence),
                            this.verbpath_.push(element.verbpath),
                            this.verbRate_.push(element.verbRate),
                            this.verbStat_.push(element.verbStat),
                            this.verbType_.push(element.verbType),
                            this.verbname_.push(element.verbname),
                            this.verbNote_.push(element.verbNote),
                            this.verbLangArabic_.push(element.verbLangArabic),
                            this.verbLangRusian_.push(element.verbLangRusian),
                            this.verbLangspanish_.push(element.verbLangspanish),
                            this.verbLangDeutsch_.push(element.verbLangDeutsch),
                            this.verbLangChain_.push(element.verbLangChain) 
                            
                        });    
                       
                   
                    })
                .catch(error => consal.log(error))
                
                //.then(data => console.log(data));
               
            } ,
            }).mount('#app'); 


           