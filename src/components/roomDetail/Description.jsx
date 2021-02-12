import React from 'react';

const Description = () => {
  const accommodationDesc =
    '해안길 언덕위에 동해바다를 바라보고, 언덕이라 바다 뷰 너무 멋있고, 고층이라 침대에서도 시원한 파도소리가 들리고  바다가  바로 눈앞에~~~ 펼쳐집니다.\n 가족,연인,친구등 모두 편안히  쉴 수 있는 아늑한 공간입니다. 단기,장기숙박 가능하구요~~~\n주위에 도깨비촬영지,방탄소년단 앨범 쟈켓 정류장,아들바위등등.\n\n숙소 바로 아래 편의점이 있고 할인마트는 에이스마트가 가깝고 수협바다마트. 농협하나로마트. 원마트도 있습니다.\n\n주문진항에는 싱싱한 수산물 좌판과 대게.홍게.킹크랩등 다양한 바다게 찜집과 횟집. 그리고 건어물 상가. 수산시장등 엄청 많습니다. 또한 소돌항은 자연산만 취급하는 회와 매운탕. 조개구이. 문어가 유명합니다.\n\n숙소\n해안길 언덕위에 동해바다를 바라보고, 언덕이라 바다 뷰 너무 멋있고, 고층이라 침대에서도 시원한 파도소리가 들리고  바다가  바로 눈앞에~~~ 펼쳐집니다.\n 가족,연인,친구등 모두 편안히  쉴 수 있는 아늑한 공간입니다. 단기,장기 숙박 가능하고요~~\n주위에 도깨비촬영지,방탄소년단 앨범 쟈켓 정류장,아들바위등등.\n\n숙소 바로 아래 편의점이 있고 할인마트는 에이스마트가 가깝고 수협바다마트. 농협하나로마트. 원마트도 있습니다.\n\n주문진항에는 싱싱한 수산물 좌판과 대게.홍게.킹크랩등 다양한 바다게 찜집과 횟집. 그리고 건어물 상가. 수산시장등 엄청 많습니다. 또한 소돌항은 자연산만 취급하는 회와 매운탕. 조개구이. 문어가 유명합니다.\n\n게스트 이용 가능 공간/시설\n맛있는 음식을 할 수 있는 주방, 욕실등 시설 완비되어 있어요.\n\n기타 주의사항\n주차증 발급으로 차량번호 미리 알려주시면 감사하겠어요.^*^';
  accommodationDesc.split('\n');

  return (
    <div className="text-1.6rem whitespace-pre-wrap">
      {accommodationDesc}
      <div className="my-20 border-b"></div>
    </div>
  );
};

export default Description;