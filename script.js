let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

// header count get id
let total = document.getElementById('total');
let interviewCount  = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
// toggle btn get id
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
// 
const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

// calculate header 
function calculateCount(){
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount();
// Step 1 toggle section text & bg color 
function toggleStyle(id){
    // 
    allFilterBtn.classList.add('bg-white' , 'text-gray-500')
    interviewFilterBtn.classList.add('bg-white' , 'text-gray-500')
    rejectedFilterBtn.classList.add('bg-white' , 'text-gray-500')
    // 
    allFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white')
    console.log(id);

    const selected = document.getElementById(id);//this is the button that clicked for filter
    currentStatus = id
    console.log(currentStatus);

    // adding black bg for current button
    selected.classList.remove('bg-white' , 'text-gray');
    selected.classList.add('bg-[#3b82f6]' , 'text-white') ;
    // Step -1 finished

    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();

    }else if(id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }else if(id == 'rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }

}

// Step -2 interview & rejected click event
mainContainer.addEventListener('click' , function(event){

if(event.target.classList.contains('interview-btn')){

     const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector('.jobName').innerText;
    const positionName  = parentNode.querySelector('.positionName').innerText;
    const work  = parentNode.querySelector('.work').innerText;
    const apply  = parentNode.querySelector('.apply').innerText;
    const notes  = parentNode.querySelector('.notes').innerText;

    parentNode.querySelector('.apply').innerText = 'INTERVIEW'
    console.log(jobName);
    const cardInfo = {
        jobName, positionName, work, apply:'INTERVIEW',notes
    };
    const jobExist = interviewList.find(item => item.jobName == cardInfo.jobName)
    if(!jobExist){
        interviewList.push(cardInfo);

    }
    calculateCount();
    //step -2 finished
    // removed from job in rejected list
    rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName)
    // after remove rendering the html
    if(currentStatus == "rejected-filter-btn"){
        renderRejected();
    }
     calculateCount();
}else if(event.target.classList.contains('rejected-btn')){

     const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector('.jobName').innerText;
    const positionName  = parentNode.querySelector('.positionName').innerText;
    const work  = parentNode.querySelector('.work').innerText;
    const apply  = parentNode.querySelector('.apply').innerText;
    const notes  = parentNode.querySelector('.notes').innerText;

    parentNode.querySelector('.apply').innerText = 'REJECTED'
    console.log(jobName);
    const cardInfo = {
        jobName, positionName, work, apply:'REJECTED',notes
    };
    const jobExist = rejectedList.find(item => item.jobName == cardInfo.jobName)

    if(!jobExist){
        rejectedList.push(cardInfo);

    }
    calculateCount();
    //step -2 finished
    // removed from job in rejected list
    interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName)
    // after remove rendering the html
    if(currentStatus == "rejected-filter-btn"){
        renderInterview();
    }
     calculateCount();
}

   
})


//  /step -3 rendering
function renderInterview(){
    // make the filterSection empty every time
    filterSection.innerHTML = '' 
    if (interviewList.length === 0) { 
        filterSection.innerHTML = `
         <div class="text-center py-10  "> <i class="fa-regular fa-file-lines text-9xl text-blue-400"></i> 
         <p class="mt-4 text-3xl text-[#002C5C] font-bold">No Jobs Available</p> 
         <p class="mt-4 text-xl font-semibold text-gray-600">Check back soon for new job opportunities</p> 
         </div> 
         `;
          return; 
    }
    // create innerHTMl
    for  ( let interview of interviewList){

        let div = document.createElement('div');
        div.className = 'flex justify-between bg-white shadow-md rounded-md p-8'
        div.innerHTML = ` 
         
                <div class="space-y-6">
                <div>
                    <p class="jobName text-2xl text-[#002C5C] font-bold">${interview.jobName}</p>
                    <p class="positionName font-semibold mt-2 text-[#64748B]">${interview.positionName}</p>
                </div>
                <div>
                    <p class="work font-semibold">${interview.work}</p>
                </div>
                <div class="flex gap-4">
                    <p class="apply px-4 py-2  text-[#10B981] font-bold border border-green-700 rounded-md">${interview.apply}</p>
                </div>
                <div>
                    <p class="notes text-[#535e6efb] font-semibold">${interview.notes}</p>
                </div>
                <div class="flex gap-5">
                    <button class="interview-btn px-4 py-2 text-[#10B981] font-bold border border-green-700 rounded-md">INTERVIEW</button>
                    <button class="rejected-btn px-4 py-2 text-red-700 font-bold border border-red-700 rounded-md">REJECTED</button>
                </div>
            </div>
            <div>
                <button class="btn-delete px-4 py-2"><i class="fa-solid fa-trash-can"></i></button>
            </div>
             
        ` 
        filterSection.appendChild(div)
    }
}

function renderRejected(){
    // make the filterSection empty every time
    filterSection.innerHTML = ''
    if (rejectedList.length === 0) { 
        filterSection.innerHTML = `
         <div class="text-center py-10  "> <i class="fa-regular fa-file-lines text-9xl text-blue-400"></i> 
         <p class="mt-4 text-3xl text-[#002C5C] font-bold">No Jobs Available</p> 
         <p class="mt-4 text-xl font-semibold text-gray-600">Check back soon for new job opportunities</p> 
         </div> 
         `;
          return; 
    }
    // create innerHTMl
    for  ( let rejected of rejectedList){

        let div = document.createElement('div');
        div.className = 'flex justify-between  bg-white shadow-md rounded-md p-8'
        div.innerHTML = ` 
         
                <div class="space-y-6">
                <div>
                    <p class="jobName text-2xl text-[#002C5C] font-bold">${rejected.jobName}</p>
                    <p class="positionName font-semibold mt-2 text-[#64748B]">${rejected.positionName}</p>
                </div>
                <div>
                    <p class="work font-semibold">${rejected.work}</p>
                </div>
                <div class="flex gap-4">
                    <p class="apply px-4 py-2  text-red-700 font-bold border border-red-700 rounded-md">${rejected.apply}</p>
                </div>
                <div>
                    <p class="notes text-[#535e6efb] font-semibold">${rejected.notes}</p>
                </div>
                <div class="flex gap-5">
                    <button class="interview-btn px-4 py-2 text-[#10B981] font-bold border border-green-700 rounded-md">INTERVIEW</button>
                    <button class="rejected-btn px-4 py-2 text-red-700 font-bold border border-red-700 rounded-md">REJECTED</button>
                </div>
            </div>
            <div>
                <button class="btn-delete px-4 py-2"><i class="fa-solid fa-trash-can"></i></button>
            </div>
             
        ` 
        filterSection.appendChild(div)
    }
}