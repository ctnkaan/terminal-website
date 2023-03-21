import type { NextPage } from "next";
import { useState } from "react";
import Footer from "../components/Footer";
import Terminal from "../components/Terminal";
import panicStyles from "../styles/css/kernel-panic.module.css";

const Home: NextPage = () => {
	const [kernelPanicked, setKernelPanicked] = useState(false);

	if (!kernelPanicked) {
		return (
			<div>
				<Terminal setKernelPanicked={setKernelPanicked} />
				<Footer />
			</div>
		);
	} else {
		return (
			<div className={panicStyles.bg}>
				<p>
					<span>
						[ 285.631847] BUG: unable to handle kernel NULL pointer dereference
						at 0000000000000198 <br />[ 285.632048] IP:
						[&lt;ffffffff81076d3a&gt;] __queue_work+0x1a/0x460 <br />
						[ 285.632207] PGD 800000041adb6067 P4D 800000041adb6067 PUD 3e3b9067
						PMD 0 <br />
						[ 285.632373] Oops: 0002 [#1] SMP <br />
						[ 285.632505] CPU: 1 PID: 5 Comm: kworker/u2:0 Not tainted
						4.4.0-31-generic #50~14.04.1-Ubuntu <br />
						[ 285.632673] Hardware name: ctnkaan ASUS Zephyrus G14 8460p/161C,
						BIOS 68SCF Ver. F.20 05/31/2013 <br />
						[ 285.632865] Workqueue: events_unbound async_run_entry_fn <br />
						[ 285.633012] task: ffff88003e72d400 ti: ffff88003e732000 task.ti:
						ffff88003e732000 <br />
						[ 285.633182] RIP: 0010:[&lt;ffffffff81076d3a&gt;]
						[&lt;ffffffff81076d3a&gt;] __queue_work+0x1a/0x460 <br />
						[ 285.633360] RSP: 0018:ffff88003e733c00 EFLAGS: 00010246 <br />
						[ 285.633488] RAX: 0000000000000000 RBX: ffff88003fb7ee00 RCX:
						ffffffff81b9c308 <br />
						[ 285.633658] RDX: ffff88003fb7e800 RSI: 0000000000000000 RDI:
						ffff88003fb7ee00 <br />
						[ 285.633828] RBP: ffff88003e733c70 R08: 0000000000000000 R09:
						ffff88003e7351c0 <br />
						[ 285.633998] R10: ffff88003e735040 R11: 0000000000000000 R12:
						ffff88003fb7ee00 <br />
						[ 285.634168] R13: ffff88003fb7e800 R14: ffff88003fb7ed20 R15:
						ffffffff81b90000 <br />
						[ 285.634339] FS: 0000000000000000(0000) GS:ffff88003fc00000(0000)
						knlGS:0000000000000000 <br />[ 285.634534] CS: 0010 DS: 0000 ES:
						0000 CR0: 0000000080050033 <br />
						[ 285.634666] CR2: 0000000000000198 CR3: 000000003e3b6000 CR4:
						00000000000406e0 <br />
						[ 285.634836] Stack: <br />[ 285.634958] ffff88003e733c70
						ffffffff812edf78 ffff88003fb7ee <br />
						Kernel panic - not syncing: Fatal exception in interrupt <br />
					</span>
				</p>
			</div>
		);
	}
};

export default Home;
