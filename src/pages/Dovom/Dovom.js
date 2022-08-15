import React from 'react'
import './Dovom.css'
import line from "../../asserts/redline.png"
import text from '../../asserts/text.png'
import text1 from '../../asserts/text1.png'
import rectagle from '../../asserts/Rectangle.png'
import Mark from '../../asserts/questionMark.png'
import Exclaimation from '../../asserts/exlamation.png'
import HorizontalLine from '../../asserts/h-line.png'
// import Vline from '../../asserts/v-line.png'

export const Dovom = () => {
  return (
    <div className='Dovom pb-[3rem]'>
        
        <div className="banner">
            <p className='text-center text-4xl pt-24 font-normal text-white mt-20 lg:text-6xl lg:pt-[12rem]'>
            PARKIRAJ IZGOVORE DRUGAM!
            </p>
            <p className='w-[342px] text-center h-[140px] font-normal text-white mr-auto ml-auto pt-[54px] lg:text-3xl lg:w-[743px] lg:pt-[7rem]'>
            Kampanja ozaveščanja o problematiki neupravičenega parkiranja na mestih, rezerviranih za invalide. 
            </p>
             <div className="mt-[3rem] pb-[7rem]"> <button className='Proglej block text-white ml-auto mr-auto p-[16px] lg:mt-[8rem] lg:text-3xl lg:font-bold'>POGLEJ VIDEO</button> </div>
             <div><img src={line} alt="" className='w-[100%]' /></div>
             
             <div className='flex flex-wrap'>

             <div className="projektu basis-6/12">
             <img src={text} alt="" className='ml-auto mr-auto mt-[2rem] mb-[2rem]' />
             </div>
             <div className="projektu Raziskava basis-6/12">
             <img src={text1} alt="" className='ml-auto mr-auto mt-[2rem] mb-[2rem]' />
             </div>
             </div>
        </div>

        <div className="main-section">
        <div className="text-section flex flex-wrap ml-[1.2rem] mr-[1rem] lg:ml-[5rem]  lg:mr-[2rem] ">
            <div className="text-section-1 flex flex-wrap lg:ml-[5rem] mt-[5rem]">
                          <div className="images basis-auto">
                                <img src={rectagle} alt="" className='relative'/>
                                <img src={Mark} alt="" className='absolute mt-[-9rem] ml-[3rem]' />
                          </div>

                          <div className='basis-auto lg:ml-[4rem]'>
                            <p className='mb-[2rem]  lg:font-bold lg:text-5xl' >Kaj želimo doseči</p>
                            <ul>
                                <li className='lg:mb-[1rem] lg:w-[565px] text-lg'>
                                Ozaveščati o problematiki parkiranja invalidov in krepiti solidarnost do sočloveka v prometu in širši družbi.
                                </li>
                                <li className='lg:mb-[1rem] lg:w-[565px] text-lg'>
                                Izpostaviti zaskrbljujoče rezultate raziskave, ki nakazujejo na nizko raven kulture v družbi in posluha do invalidov.
                                </li>
                                <li className='lg:mb-[1rem] lg:w-[565px] text-lg'>
                                Vplivati na izboljšanje razmer, vezanih na parkiranje na parkirnih mestih, rezerviranih za invalide.
                                </li>
                                <li className='lg:mb-[1rem] lg:w-[565px] text-lg'>
                                Spodbuditi širšo javno debato o kulturi v prometu in vključenosti.
                                </li>
                            </ul>
                          </div>
                    </div>
                       
                    <div className="text-section-1 flex flex-wrap lg:ml-[14rem] mt-[5rem]">
                          <div className="images basis-auto">
                                <img src={rectagle} alt="" className='relative'/>
                                <img src={Exclaimation} alt="" className='absolute mt-[-9rem] ml-[4.4rem]' />
                          </div>

                          <div className='basis-auto lg:ml-[4rem]'>
                            <p className='mb-[2rem]  lg:font-bold lg:text-5xl' >Kaj želimo doseči</p>
                            <ul>
                                <li className='lg:mb-[1rem] lg:w-[565px] text-lg'>
                                S predstavitvijo rezultatov raziskave in s spodbujanjem javne debate.
                                </li>
                                <li className='lg:mb-[1rem] lg:w-[565px] text-lg'>
                                S strokovno razpravo o učinkovitosti obstoječega sistema nadzora, označevanja in kaznovanja neupravičenega parkiranja na parkirnih mestih, rezerviranih za invalide. 
                                </li>
                                <li className='lg:mb-[1rem] lg:w-[565px] text-lg'>
                                S kampanjo, ki bo usmerjena na ozaveščanje in izobraževanje širše javnosti o problematiki parkiranja na mestih, rezerviranih za invalide.
                                </li>
                            </ul>
                          </div>
            </div>
                   <img src={HorizontalLine} alt="" className='w-[100%] mt-[3rem]' />
        </div>
        </div>
               
    </div>
  )
}
