import React from 'react'
import logo2 from '../../assets/logo2.png'
import './Seidbar.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';




const Seidbar = () => {
  return (
    <div className='seidbar-big'>
      <img className='img-logo1' src={logo2} alt="" />
      <p className='div-p'>“Daryo” internet-nashrining (O‘zbekiston matbuot va axborot agentligi (O‘zMAA, hozirgi O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi) tomonidan 13.03.2015 yil sanasida 0944-sonli guvohnoma bilan ommaviy axborot vositasi sifatida ro‘yxatga olingan. Matnli materiallarni to‘liq ko‘chirish yoki qisman iqtibos keltirishga, shuningdek, fotografik, grafik, audio va/yoki videomateriallaridan foydalanishga “daryo.uz” saytiga giperhavola mavjud bo‘lgan va/yoki “Daryo” internet-nashrining muallifligini ko‘rsatuvchi yozuv ilova qilingan taqdirda yo‘l qo‘yiladi. Chop etiladigan ba’zi ma’lumotlar 18 yoshga to‘lmagan foydalanuvchilarga mo‘ljallanmagan bo‘lishi mumkin. Info@daryo.uz
        Telegram
        Youtube
        Facebook
        Instagram
      </p>
      <div className='div-tg'>
        <div className='tg'><TelegramIcon className='ic'/></div>
        <div className='tg'><YouTubeIcon className='ic'/></div>
        <div className='tg'><FacebookIcon className='ic'/></div>
        <div className='tg'><InstagramIcon className='ic'/></div>
        <div className='tg'><TwitterIcon className='ic'/></div>
      </div>
      <div className='seidbar-end'>
        <div className='end'>© «Simple Networking Solutions» MChJ,<br /> 2013–2023</div>
        <div className='end'>Yosh bo‘yicha cheklov</div>
        <div className='end'>Xato topdingizmi? Ctrl+Enter’ni bosing</div>
        <div className='end'> Foydalanish shartlari
          <br />Reklama</div>
        <div className='end'> Maxfiylik siyosati</div>
        <div className='end'></div>
      </div>
    </div>
  )
}

export default Seidbar