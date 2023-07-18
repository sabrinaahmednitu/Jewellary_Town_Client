const MyOrder = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>

              <th>Role</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>

              <td>Member / admin</td>
              <td>12/16/2020</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>

              <th>Role</th>
              <th>Last Login</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
