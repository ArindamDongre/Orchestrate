package com.example.Workflowz.controllers;

import com.example.Workflowz.models.WorkflowstepModel;
import com.example.Workflowz.models.WorkflowstepresultModel;
import com.example.Workflowz.services.ExecutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/execution")
public class ExecutionController {
    //  Dynamic graph logic
    private Map<String, Map<String, Pair<Integer, String>>> generateGraph(List<WorkflowstepresultModel> stepResults) {
        // Map<Action, Map<Activity, pair<Key, Condition>>
        // to make the workflow dynamic for frontend

        Map<String, Map<String, Pair<Integer, String>>> graph = new HashMap<>();

        for (WorkflowstepresultModel result : stepResults) {
            String actionName = result.getWorkflowStep().getAction().getName();
            String activityName = result.getWorkflowStep().getActivity().getName();
            Integer stopFlag = result.getStopFlag();
            String conditionText = result.getWorkflowStep().getCondition().getConditionText();

            graph.putIfAbsent(actionName, new HashMap<>());
            graph.get(actionName).put(activityName, new Pair<>(stopFlag, conditionText));
        }
        return graph;
    }




    @Autowired
    private ExecutionService executionService;

    @PostMapping("/start/{workflowId}")
    public Map<String, Map<String, Pair<Integer, String>>> startWorkflow(@PathVariable Long workflowId, @RequestBody Map<String, Object> input) {
        List<WorkflowstepresultModel> results = executionService.startWorkflow(workflowId, input);
        Map<String, Map<String, Pair<Integer, String>>> graph = generateGraph(results);
        return graph;
    }



}
