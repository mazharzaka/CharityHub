import { useTransactionStore } from "@/lib/store/TransactionStore";
import Headline from "../cards/Headline";
import { useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import TextHome from "../cards/TextHome";
import { TransactionTable } from "../cards/TransactionTable";

function Transaction() {
    const { loading, fetchTransactions , transactions } = useTransactionStore()
    useEffect(() => {
        fetchTransactions()
    }
        , [])
    return (
        <div className="flex justify-center">
            <div className="max-w-4xl w-full  !p-8 space-y-6 ">
                <div className="flex w-full  !p-8 space-y-6 items-center flex-col">
                    <Headline text="My Transaction" size="text-3xl" />
                    <p className="text-gray-600 text-center">Your contribution makes a difference!</p>
                </div>
                {loading ? <div>Loading...</div>:
                <Card className=" !my-5 ">
                    <CardContent className="!p-6  !space-y-4">
                        <TextHome text="All Transaction " size="text-2xl" />
                        <TransactionTable AllTransaction={transactions} Row={["campaignName", "Status", "paymentStatus", "donationType", "Date", "Amount","transactionReference"]} />
                    </CardContent>
                </Card>}
            </div>
        </div>
    )
}

export default Transaction