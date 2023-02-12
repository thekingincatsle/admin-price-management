import React, { useEffect, useState, useRef } from "react";
import {
  getAcceptedForm,
  getAcceptedByName,
  getAcceptedByTitle,
  getAcceptedByAge,
  getAcceptedByFamilyId,
  getSortedAcceptedRegisterForm,
} from "../service/RegisterFormService";
import { onlyUnique } from "../utils";
import Title from "./Title";
import ConfirmModal from "./ConfirmModal";

const SuccessList = () => {
  const sortFieldEnum = {
    name: "ten",
    age: "tuoi",
    familyId: "id_so_ho_khau",
    title: "ten_danh_hieu",
    admin: "ten_can_bo",
    price: "ten_phan_thuong",
  };
  const sortEnum = {
    asc: "asc",
    desc: "desc",
  };
  const [successForms, setSuccessForms] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sort, setSort] = useState(sortEnum.asc);
  const [nameFilter, setNameFilter] = useState("");
  const [familyIdFilter, setFamilyIdFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const uniqueFamilyIdList = useRef([]);
  const uniqueAge = useRef([]);
  const uniqueTitle = ["Giỏi", "Tiên tiến", "Còn lại"];
  useEffect(() => {
    getAcceptedForm().then((res) => {
      setSuccessForms(res.data);
      uniqueFamilyIdList.current = res.data
        .map(
          (successForms) => successForms.hocSinh.thanhVien.hoGiaDinh.idSoHoKhau
        )
        .filter(onlyUnique);
      uniqueAge.current = res.data
        .map(
          (successForm) =>
            new Date().getFullYear() - successForm.hocSinh.thanhVien.namSinh
        )
        .filter(onlyUnique);
    });
  }, []);

  function handleSortField(e) {
    setSortField(e.target.value);
    triggerSort(e.target.value, sort);
  }

  function handleSortOption(e) {
    setSort(e.target.value);
    triggerSort(sortField, e.target.value);
  }

  function triggerSort(sortField, sort) {
    if (sortField && sort) {
      getSortedAcceptedRegisterForm(sortField, sort).then((res) => {
        setSuccessForms(res.data);
      });
    } else {
      getAcceptedForm().then((res) => setSuccessForms(res.data));
    }
  }

  function handleNameFilter(e) {
    setNameFilter(e.target.value);
    getAcceptedByName(e.target.value).then((res) => setSuccessForms(res.data));
  }

  function handleFamilyIdFilter(e) {
    setFamilyIdFilter(e.target.value);
    getAcceptedByFamilyId(e.target.value).then((res) =>
      setSuccessForms(res.data)
    );
  }
  function handleAgeFilter(e) {
    setAgeFilter(e.target.value);
    getAcceptedByAge(e.target.value).then((res) => setSuccessForms(res.data));
  }
  function handleTitleFilter(e) {
    setTitleFilter(e.target.value);
    getAcceptedByTitle(e.target.value).then((res) => setSuccessForms(res.data));
  }
  return (
    <div className="w-full">
      <Title text="Danh sách học sinh giỏi nhận thưởng" />
      <div className="flex">
        <div className="w-1/4 flex flex-col px-5 py-5 gap-3 ">
          <div className="font-bold text-center bg-cyan-200 w-1/3 px-3 py-1 rounded-lg self-center mb-3">
            Sắp xếp
          </div>
          <div>
            <label htmlFor="sortField" className="font-bold">
              Tên trường sắp xếp
            </label>
            <select
              id="sortField"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={sortField}
              onChange={handleSortField}
            >
              <option selected value="">
                --None--
              </option>
              <option value={sortFieldEnum.name}>Tên</option>
              <option value={sortFieldEnum.age}>Tuổi</option>
              <option value={sortFieldEnum.familyId}>Id sổ hộ khẩu</option>
              <option value={sortFieldEnum.status}>Trạng thái</option>
              <option value={sortFieldEnum.title}>Danh hiệu</option>
              <option value={sortFieldEnum.admin}>Tên cán bộ xác nhận</option>
            </select>
          </div>
          <div>
            <label htmlFor="sortOption" className="font-bold">
              Thứ tự sắp xếp
            </label>
            <select
              id="sortOption"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={sort}
              onChange={handleSortOption}
            >
              <option value={sortEnum.asc} selected>
                Tăng dần
              </option>
              <option value={sortEnum.desc}>Giảm dần</option>
            </select>
          </div>
        </div>
        <div className="w-3/4 flex flex-col px-5 py-5 gap-3 border-l-4">
          <div className="font-bold text-center bg-cyan-200 w-1/3 px-3 py-2 rounded-lg self-center">
            Lọc dữ liệu
          </div>
          <div className="flex">
            <div className="w-1/2 px-5 flex flex-col gap-3">
              <div class="w-full px-3">
                <label for="name-filter" class="font-bold">
                  Tìm theo tên
                </label>
                <input
                  type="text"
                  id="name-filter"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={nameFilter}
                  onChange={handleNameFilter}
                />
              </div>
              <div>
                <label for="name-filter" class="font-bold">
                  Tìm theo id sổ hộ khẩu
                </label>
                <select
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={familyIdFilter}
                  onChange={handleFamilyIdFilter}
                >
                  {uniqueFamilyIdList.current.map((familyId) => (
                    <option value={familyId} key={familyId}>
                      {familyId}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-1/2 px-5 flex flex-col gap-3">
              <div>
                <label for="name-filter" class="font-bold">
                  Tìm theo danh hiệu
                </label>
                <select
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={titleFilter}
                  onChange={handleTitleFilter}
                >
                  {uniqueTitle.map((title) => (
                    <option value={title} key={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label for="name-filter" class="font-bold">
                  Tìm theo tuổi
                </label>
                <select
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={ageFilter}
                  onChange={handleAgeFilter}
                >
                  {uniqueAge.current.map((age) => (
                    <option value={age} key={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5"
          onClick={() => {
            getAcceptedForm().then((res) => {
              setSuccessForms(res.data);
            });
          }}
        >
          Đặt lại
        </button>
        <ConfirmModal />
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-gray-200 border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Mã số đơn đăng kí
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Họ và tên
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Id Sổ hộ khẩu
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Tuổi
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Danh hiệu
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Phần thưởng
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Cán bộ xác nhận
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {successForms.map((form, index) => (
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {form.id}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {form.hocSinh.thanhVien.ten}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {form.hocSinh.thanhVien.hoGiaDinh.idSoHoKhau}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {new Date().getFullYear() -
                          form.hocSinh.thanhVien.namSinh}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {form.danhHieu.tenDanhHieu}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {form.danhHieu.phanThuongHocSinhGioi.soLuong +
                          " " +
                          form.danhHieu.phanThuongHocSinhGioi.tenPhanThuong}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {form.canBo.tenCanBo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessList;
