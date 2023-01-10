import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFormById } from "../service/RegisterFormService";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { updateForm } from "../service/RegisterFormService";
import { useNavigate } from "react-router-dom";
const FormDetail = () => {
  const { id } = useParams();
  const [form, setForm] = useState();
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState(1);
  useEffect(() => {
    getFormById(id).then((res) => {
      setForm(res.data);
      setStatus(res.data.trangThai);
    });
  }, [id]);
  const navigate = useNavigate();
  function handleSave() {
    updateForm({
      ...form,
      trangThai: status,
      canBo: {
        email: "datdeptrai@gmail.com",
      },
      danhHieu:
        status === "Xác nhận"
          ? {
              id: title,
            }
          : null,
    }).then((data) => {
      alert("Lưu thông tin thành công");
      navigate("/register-list");
    });
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mt-10 bg-cyan-200 px-5 py-3 rounded-xl">
        <div className="w-1/3   flex flex-col rounded-md">
          <div className="mx-3 my-3 w-full">
            <div className="text-sm">Mã giấy khai sinh</div>
            <div className="text-xl">{form?.hocSinh.maGiayKhaiSinh}</div>
          </div>
          <div className="mx-3 my-3 w-full">
            <div className="text-sm">Họ và tên</div>
            <div className="text-xl">{form?.hocSinh.thanhVien.ten}</div>
          </div>
          <div className="mx-3 my-3 w-full">
            <div className="text-sm">Giới tính</div>
            <div className="text-xl">{form?.hocSinh.thanhVien.gioiTinh}</div>
          </div>
        </div>
        {/* canbo verification */}
        <div className="w-1/3   h-64">
          <div className="mx-3 my-3 w-full">
            <div className="text-sm">Năm sinh</div>
            <div className="text-xl">{form?.hocSinh.thanhVien.namSinh}</div>
          </div>
          <div className="mx-3 my-3 w-full">
            <div className="text-sm">Trường</div>
            <div className="text-xl">{form?.hocSinh.truong}</div>
          </div>
          <div className="mx-3 my-3 w-full">
            <div className="text-sm">Lớp</div>
            <div className="text-xl">{form?.hocSinh.lop}</div>
          </div>
          <div className="mx-3 my-3 w-full">
            <div className="text-sm">Giải thưởng</div>
            <div className="text-xl">{form?.giaiThuong}</div>
          </div>
        </div>
        <div className="w-1/3   h-64">
          <div className="mx-3 my-3 w-full">
            <div className="text-sm">Ảnh minh chứng</div>
            <Zoom>
              <img src={form?.anhMinhChung} alt="" className="w-3/4" />
            </Zoom>
          </div>
        </div>
      </div>
      <div className="w-1/3 mt-5">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Trạng thái đơn
        </label>
        <select
          id="countries"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Đang chờ">Đang chờ</option>
          <option value="Xác nhận">Xác nhận</option>
          <option value="Từ chối">Từ chối</option>
        </select>
        {status === "Xác nhận" ? (
          <>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
            >
              Danh hiệu học sinh
            </label>
            <select
              id="countries"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={1}>Giỏi</option>
              <option value={2}>Tiên Tiến</option>
              <option value={3}>Còn Lại</option>
            </select>
          </>
        ) : (
          ""
        )}
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default FormDetail;
