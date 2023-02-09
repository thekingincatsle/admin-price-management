import React, { useState, useEffect, useRef } from "react";
import {
  getAllRegisterForm,
  getSortedRegisterForm,
  getByName,
  getByFamilyId,
  getByStatus,
} from "../service/RegisterFormService";
import { useNavigate } from "react-router-dom";
import { onlyUnique } from "../utils";

const RegisterList = () => {
  const sortFieldEnum = {
    name: "ten",
    age: "tuoi",
    familyId: "id_so_ho_khau",
    status: "trang_thai",
  };
  const sortEnum = {
    asc: "asc",
    desc: "desc",
  };
  const uniqueFamilyIdList = useRef([]);
  const uniqueStatus = ["Đang chờ", "Xác nhận", "Từ chối"];

  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sort, setSort] = useState(sortEnum.asc);
  const [nameFilter, setNameFilter] = useState("");
  const [familyIdFilter, setFamilyIdFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  useEffect(() => {
    getAllRegisterForm().then((res) => {
      setRegisterForm(res.data);
      uniqueFamilyIdList.current = res.data
        .map(
          (registerForm) => registerForm.hocSinh.thanhVien.hoGiaDinh.idSoHoKhau
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
      getSortedRegisterForm(sortField, sort).then((res) => {
        setRegisterForm(res.data);
      });
    } else {
      getAllRegisterForm().then((res) => setRegisterForm(res.data));
    }
  }

  function handleNameFilter(e) {
    setNameFilter(e.target.value);
    getByName(e.target.value).then((res) => setRegisterForm(res.data));
  }

  function handleFamilyIdFilter(e) {
    setFamilyIdFilter(e.target.value);
    getByFamilyId(e.target.value).then((res) => setRegisterForm(res.data));
  }
  function handleStatusFilter(e) {
    setStatusFilter(e.target.value);
    getByStatus(e.target.value).then((res) => setStatusFilter(res.data));
  }
  return (
    <div className="w-full">
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
              <option value={sortFieldEnum.age}>Năm sinh</option>
              <option value={sortFieldEnum.familyId}>Id sổ hộ khẩu</option>
              <option value={sortFieldEnum.status}>Trạng thái</option>
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
            <select
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={statusFilter}
              onChange={handleStatusFilter}
            >
              {uniqueStatus.map((status) => (
                <option value={status} key={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
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
                      Trạng thái xác thực chứng nhận
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Thông tin chi tiết
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {registerForm.map((registerForm, index) => (
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {registerForm.id}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {registerForm.hocSinh.thanhVien.ten}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {registerForm.hocSinh.thanhVien.hoGiaDinh.idSoHoKhau}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {new Date().getFullYear() -
                          registerForm.hocSinh.thanhVien.namSinh}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {registerForm.trangThai}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => {
                            navigate(`/form-detail/${registerForm.id}`);
                          }}
                        >
                          Chi tiết
                        </button>
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

export default RegisterList;
