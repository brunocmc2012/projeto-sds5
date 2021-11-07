import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function Dashboard() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Vendas Marvel vs DC</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5>Total de Vendas</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5>Líderes</h5>
                        <DonutChart />
                    </div>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;