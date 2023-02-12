import React, { useState } from "react";
import { addFamily } from "../service/FamilyService";
import { addMember } from "../service/MemberService";

export default function FamilyAddModal() {
  const sexEnum = {
    male: "Nam",
    female: "Nữ",
  };
  const [showModal, setShowModal] = useState(false);
  const [familyId, setFamilyId] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerBornId, setOwnerBornId] = useState("");
  const [sex, setSex] = useState(sexEnum.male);
  const [yearBorn, setYearBorn] = useState("");

  async function handleSubmit() {
    await addFamily({
      idSoHoKhau: familyId,
      password,
      tenChuHo: ownerName,
      diaChi: address,
    });
    await addMember({
      thanhVien: {
        maGiayKhaiSinh: ownerBornId,
        ten: ownerName,
        gioiTinh: sex,
        namSinh: yearBorn,
        hoGiaDinh: {
          idSoHoKhau: familyId,
        },
        hocSinh: null,
      },
    });
    setShowModal(false);
    alert(`Thêm thành công hộ khẩu với id ${familyId}`);
    window.location.reload(false);
  }
  return (
    <div className="px-8">
      <button
        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Thêm hộ khẩu
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Thêm hộ khẩu</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="text-3xl mb-5 flex gap-6">
                    <div className="flex flex-col gap-5 ">
                      <div className="font-bold text-xl">Thông tin hộ khẩu</div>
                      <div class="w-full px-3">
                        <label
                          for="default-input"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Id sổ hộ khẩu
                        </label>
                        <input
                          type="text"
                          id="default-input"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={familyId}
                          onChange={(e) => setFamilyId(e.target.value)}
                        />
                      </div>
                      <div class="w-full px-3">
                        <label
                          for="default-input"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Địa chỉ
                        </label>
                        <input
                          type="text"
                          id="default-input"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div class="w-full px-3">
                        <label
                          for="default-input"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Mật khẩu trang thông tin cho hộ gia đình
                        </label>
                        <input
                          type="password"
                          id="default-input"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-5 ">
                      <div className="font-bold text-xl">Thông tin chủ hộ</div>
                      <div class="w-full px-3">
                        <label
                          for="default-input"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          id="default-input"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={ownerName}
                          onChange={(e) => setOwnerName(e.target.value)}
                        />
                      </div>
                      <div class="w-full px-3">
                        <label
                          for="default-input"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Mã giấy khai sinh
                        </label>
                        <input
                          type="text"
                          id="default-input"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={ownerBornId}
                          onChange={(e) => setOwnerBornId(e.target.value)}
                        />
                      </div>
                      <div class="w-full px-3">
                        <label
                          for="default-input"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Giới tính
                        </label>
                        <select
                          value={sex}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) => setSex(e.target.value)}
                        >
                          <option value={sexEnum.male} key="male">
                            {sexEnum.male}
                          </option>
                          <option value={sexEnum.female} key="male">
                            {sexEnum.female}
                          </option>
                        </select>
                      </div>
                      <div class="w-full px-3">
                        <label
                          for="default-input"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Năm sinh
                        </label>
                        <input
                          type="text"
                          id="default-input"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={yearBorn}
                          onChange={(e) => setYearBorn(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Thoát
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
