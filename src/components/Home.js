import React from 'react'
import './Home.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import data from './data/data.json'

function Home() {
    const first = (
        <>
        {data.map(data => (
             <div className='box3parent'>
             <div className="box3">
        <img key={data.id} src={data.img} />
         
            <h2 key={data.id}>{data.name}</h2>
            
       
         <div className='cate'>                            
            <p key={data.id}>{data.date}</p>
                    <i class="far fa-clock"></i>
                    <p key={data.id}>{data.author}</p>
                    <i class="fas fa-user"></i>                         
        </div>
        <p key={data.id} className='text1'>{data.desc}</p>
        <div className='btn22'>
                                   <button className='btn23'>  <i class="fa fa-share-alt fa-fw"></i>   </button>
                           <button className='btn21'>قراءة المزيد</button> 
                               </div>
             </div>
             </div>
))}
        </>
    )

    

    return (
        <div className='all'>
        <div className='container'>
     
        

         
            <div className='container11'>
               <div className='box1'>
                <p className='title1'>18:30<i class="fas fa-podcast"></i></p>
                <p className='title2'>بتوقيت GMT+1</p>
                <h3>البث المباشرة مع رغيب أمين للإجابة على تساؤلاتكم التقنية من الإثنين إلى الأربعاء</h3>
                <div className='btn11'><button className='btn1'>إلتحق الأن</button></div>
                
            </div> 

            <div className='box1'>
                <a href='#'>أكثر من 2 مليون و نصف معجب<span className='fac'><i class="fab fa-facebook"></i></span></a>

                <a href='#'>أكثر من 2 مليون و نصف معجب<span className='fac'><i class="fab fa-youtube"></i></span></a>

                <a href='#'>أكثر من 2 مليون و نصف معجب<span className='fac'><i class="fab fa-twitter"></i></span></a>
            </div>

            <div className='box1'>
                
                     <h2>أكثر المواضيع مشاهدة خلال هذا الاسبوع</h2>
                     <div className='h2all'>
                <p>أعرض عليك أقوى تطبيق منافس لنتفلكس netflix لمشاهدة آخر الافلام والمسلسلات بالمجان</p>
                <img src={img1} alt='image' />
                </div>

                <div className='h2all'>
                <p>2 تيرابايت من دورات التدوال في الفوركس وغيره اقدمها لك بالمجان سارع قبل الحذف</p>
                <img src={img2} alt='image' />
                </div>


                <div className='h2all'>
                <p>طريقة جديدة لكي تجد اي كتاب تبحث عنه في الانترنت بالمجان</p>
                <img src={img3} alt='image' />
                </div>

                <div className='h2all'>
                <p>موقع موثوق يمنحك متابعين حقيقين لصفحاتك فيسبوك و انستغرام بالمجان + يمكنك شراء متابعين بأثمنة جد مناسبة</p>
                <img src={img4} alt='image' />
                </div>

                <div className='h2all'>
              <p>فيتاليك بوتيرين مخترع الإيثيريوم يصبح مليارديرا</p>
                <img src={img5} alt='image' />
                </div>

                <div className='h2all'>
               <p>وكيف تبيع الخدمة Google Drive طريقة الحصول على مساحة غير محدودة على</p>
                <img src={img6} alt='image' />
                </div>


                </div>

            </div>
             
            
            <div className='container2'>
                <div className='box2'>
                                <div className='marginbig'>
                                <p>أخر المواضيع<span className='ii'><i class="fas fa-bookmark"></i></span></p>

                                    
                            </div>
                        </div>
                        
                            
                            
                            {first}
                               
                              
                       
                           
                        
                         
                        </div>
                        </div>
 

                      
        </div>
        
        
        

        
        
       
    )
}

export default Home