import { useState } from 'react';
import Calendar from '../common/Calendar';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import onClickOutside from 'react-onclickoutside';

const RoomDetailDateEditPopup = ({
  onCloseModal,
  visible,
  setVisible,
  bookedDateDtos,
}) => {
  // 팝업창 영역 외부 클릭 시 닫히게 하기
  RoomDetailDateEditPopup.handleClickOutside = () =>
    setVisible({
      ...visible,
      state: false,
      type: 'calendar',
    });

  const history = useHistory();

  // URL query parameter 가져오기
  const url = new URL(window.location.href);
  const checkInDate = url.searchParams.get('checkInDate');
  const checkoutDate = url.searchParams.get('checkoutDate');

  // 체크인, 체크아웃 날짜에 대한 상태
  // url에 checkInDate,checkoutDate 존재 유무에 따라 달력 컴포넌트에 적용
  const [dateRange, setDateRange] = useState({
    startDate: checkInDate ? moment(checkInDate) : null,
    endDate: checkoutDate ? moment(checkoutDate) : null,
  });
  const { startDate, endDate } = dateRange;

  // 달력 날짜 포커스 상태
  const [focus, setFocus] = useState('startDate');

  // 달력 날짜 변경 함수
  // 0박 방지
  const handleOnDateChange = ({ startDate, endDate }) => {
    if (startDate !== endDate) {
      setDateRange({
        startDate: startDate,
        endDate: endDate,
      });
    }
  };

  // 달력 모달창 저장하기 클릭 시 쿼리 변경 및 모달 끄기
  const modifyDate = () => {
    if (!dateRange.startDate || !dateRange.endDate) {
      return;
    }
    url.searchParams.set('checkInDate', startDate.format('YYYY-MM-DD'));
    url.searchParams.set('checkoutDate', endDate.format('YYYY-MM-DD'));
    history.push(url.search);
    setVisible({
      ...visible,
      state: false,
    });
  };

  // 날짜 지우기
  const deleteDate = () => {
    setDateRange({
      startDate: null,
      endDate: null,
    });
    setFocus('startDate');
  };

  return (
    <div className="w-full h-full z-20" onClick={onCloseModal}>
      <div
        className="w-64rem absolute top-5.5rem right-1.6rem bg-searchBackground
        flex flex-col text-black rounded-3xl shadow-2xl p-4 border z-20"
      >
        <div className="flex px-2rem mb-10">
          <div className="w-5/12 pt-2rem">
            <h3 className="text-2.2rem font-semibold">
              {startDate && endDate
                ? `${endDate.diff(startDate, 'days')}박`
                : '날짜 선택'}
            </h3>
            <p className="text-1.4rem text-#717171">
              여행 날짜를 입력하여 정확한 요금을 확인하세요.
            </p>
          </div>
          <div className="absolute right-0.8rem flex h-5.8rem items-center mt-5 mb-4 border-2 rounded-2xl border-black">
            <div className="w-64 h-5.6rem pt-2 pl-5 border-r border-gray-400">
              <b>체크인</b>
              <input
                placeholder="날짜 추가"
                className="block text-1.4rem pt-2 leading-normal bg-transparent cursor-text"
                // 체크인 입력창 조건부 처리
                defaultValue={checkInDate}
                value={checkInDate ? checkInDate : ''}
              />
            </div>
            <div className="w-64 h-5.6rem pl-5 pt-2 ">
              <b>체크아웃</b>
              <label htmlFor="checkOut" />
              <input
                placeholder="날짜 추가"
                className="block text-1.4rem pt-2 leading-normal bg-transparent cursor-text"
                // 체크아웃 입력창 조건부 처리
                defaultValue={checkoutDate}
                value={checkoutDate ? checkoutDate : ''}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <Calendar
            dateRange={dateRange}
            setDateRange={setDateRange}
            handleOnDateChange={handleOnDateChange}
            focus={focus}
            setFocus={setFocus}
            bookedDateDtos={bookedDateDtos}
          />
        </div>
        <div className="flex items-center text-1.4rem justify-end pr-1.6rem">
          <button
            onClick={deleteDate}
            className="underline text-1.4rem p-0.8rem rounded-lg font-bold hover:bg-gray-100"
          >
            날짜 지우기
          </button>
          {startDate && endDate ? (
            <button
              onClick={modifyDate}
              className="py-0.8rem px-1.6rem ml-1.6rem font-semibold text-#fff bg-black rounded-2xl"
              data-name="close"
            >
              저장하기
            </button>
          ) : (
            // 날짜가 둘다 입력되지 않았으면 비활성화 처리
            <button
              disabled
              onClick={modifyDate}
              className="py-0.8rem px-1.6rem ml-1.6rem font-semibold text-#fff bg-#b0b0b0 rounded-2xl"
            >
              저장하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

RoomDetailDateEditPopup.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => RoomDetailDateEditPopup.handleClickOutside,
};

export default onClickOutside(RoomDetailDateEditPopup, clickOutsideConfig);
